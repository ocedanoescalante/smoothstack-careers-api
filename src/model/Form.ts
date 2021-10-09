export interface PrescreenForm {
  candidateName: FormEntry;
  candidateEmail: FormEntry;
  relocation: FormEntry;
  newRelocation: FormEntry;
  aboutYourself: FormEntry;
  otherApplications: FormEntry;
  expectedDegree: FormEntry;
  expectedGraduationDate: FormEntry;
  highestDegree: FormEntry;
  graduationDate: FormEntry;
  projects: FormEntry;
  monthsOfExperience: FormEntry;
  programmingLanguages: FormEntry;
  goodFit: FormEntry;
  referral: FormEntry;
  commitment: FormEntry;
  abilityToLearn: FormEntry;
  challengingSituation: FormEntry;
  opportunityRank: FormEntry;
  workAuthorization: FormEntry;
  backgroundCheck: FormEntry;
  githubLink: FormEntry;
  linkedinLink: FormEntry;
  canCommit: FormEntry;
  questions: FormEntry;
  communicationSkills: FormEntry;
  result: FormEntry;
  additionalNotes: FormEntry;
  isVaccinated: FormEntry;
  willVaccinate: FormEntry;
  vaccinationNotes: FormEntry;
}

interface FormEntry {
  question: string;
  answer: string;
}