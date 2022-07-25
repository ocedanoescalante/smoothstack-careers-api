import { JobSubmission } from 'src/model/JobSubmission';
import { SchedulingTypeId } from 'src/model/SchedulingType';

export const getSchedulingLink = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  typeId: SchedulingTypeId,
  submissionId?: number
) => {
  return (
    `https://app.squarespacescheduling.com/schedule.php?owner=23045512&appointmentType=${typeId}&firstName=${encodeURIComponent(
      firstName
    )}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}` +
    (submissionId ? `&field:11569425=${encodeURIComponent(submissionId)}` : '')
  );
};

export const getTechScreeningLink = (submission: JobSubmission, jobTitle: string) => {
  const { id: submissionId, techScreenSchedulingLink } = submission;
  const { firstName, lastName, email, githubLink } = submission.candidate;
  const fullName = `${firstName} ${lastName}`;
  return `https://docs.google.com/forms/d/e/1FAIpQLSdq8JhtHNcyMe3ig5W6XLQa0IB-0AY9h75G69QYfI_IKmGiYA/viewform?usp=pp_url&entry.885949558=${encodeURIComponent(
    fullName
  )}&entry.1324592995=${encodeURIComponent(email)}&entry.932761525=${encodeURIComponent(
    jobTitle ?? ''
  )}&entry.1466421106=${encodeURIComponent(githubLink ?? '')}&entry.83916426=${encodeURIComponent(
    submissionId
  )}&entry.1832598114=${encodeURIComponent(techScreenSchedulingLink)}`;
};
