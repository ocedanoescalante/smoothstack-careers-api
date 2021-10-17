export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  challengeLink: string;
  webinarLink: string;
  webinarRegistrantId: string;
  relocation: string;
  submissions: Submission[];
  webResponses: WebResponse[];
  fileAttachments: Attachment[];
}

interface Attachment {
  id: number;
  type: string;
}

export interface Submission {
  id: number;
  status: string;
  dateAdded: number;
}

export interface WebResponse {
  id: number;
  dateAdded: number;
}
