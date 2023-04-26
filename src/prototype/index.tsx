export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
