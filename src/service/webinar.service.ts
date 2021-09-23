import axios from 'axios';
import { Appointment } from '../model/Appointment';
import { WebinarRegistration } from '../model/WebinarRegistration';
import { generateZoomToken } from './auth/zoom.jwt.service';

const WEBINAR_TOPIC = 'Candidate Information Session / Learn about Smoothstack';
const BASE_URL = 'https://api.zoom.us/v2';

export const generateWebinarRegistration = async (appointment: Appointment): Promise<WebinarRegistration> => {
  const token = await generateZoomToken();
  const webinarId = await findWebinarId(token, appointment.datetime);
  const ocurrenceId = await findWebinarOcurrenceId(token, webinarId, appointment.datetime);
  return registerCandidate(token, webinarId, ocurrenceId, appointment);
};

export const cancelWebinarRegistration = async (registrantId: string): Promise<void> => {
  const token = await generateZoomToken();
  const url = `${BASE_URL}/webinars/${registrantId}`;

  return axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getWebinarRegistrationURL = async () => {
  const token = await generateZoomToken();
  const webinarId = await findWebinarId(token, new Date().toISOString());

  const url = `${BASE_URL}/webinars/${webinarId}`;
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.registration_url;
};

const findWebinarId = async (token: string, date: string): Promise<number> => {
  const url = `${BASE_URL}/users/OxHMtzLCQ7yQtd3RjNJfXw/webinars`;

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page_size: 300,
    },
  });

  const appointmentDate = new Date(date).toISOString();
  const webinar = data.webinars
    .sort((a, b) => {
      return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
    })
    .find((w: any) => {
      const lastOcurrenceDate = new Date(w.start_time).toISOString();
      return w.type === 9 && w.topic === WEBINAR_TOPIC && appointmentDate <= lastOcurrenceDate;
    });

  return webinar.id;
};

const findWebinarOcurrenceId = async (token: string, webinarId: number, date: string): Promise<string> => {
  const url = `${BASE_URL}/webinars/${webinarId}`;

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      show_previous_occurrences: true,
    },
  });

  const appointmentDate = new Date(date).toISOString();
  return data.occurrences.find((o) => new Date(o.start_time).toISOString() === appointmentDate).occurrence_id;
};

const registerCandidate = async (
  token: string,
  webinarId: number,
  occurrenceId: string,
  appointment: Appointment
): Promise<WebinarRegistration> => {
  const registrantPath = `${webinarId}/registrants`;
  const url = `${BASE_URL}/webinars/${registrantPath}`;

  const registrationData = {
    email: appointment.email,
    first_name: appointment.firstName,
    last_name: appointment.lastName,
    phone: appointment.phone,
  };

  const { data } = await axios.post(url, registrationData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      occurrence_ids: occurrenceId,
    },
  });

  return {
    registrantId: `${registrantPath}/${data.registrant_id}?occurrence_id=${occurrenceId}`,
    joinUrl: data.join_url,
  };
};