export interface IMember {
  name: string;
  email: string;
  contact: string;
  university: string;
}

export interface ITeamRegistration {
  teamName: string;
  totalMembers: number;
  leaderName: string;
  leaderEmail: string;
  leaderContact: string;
  university: string;
  members: IMember[];
  referral: string;
}
