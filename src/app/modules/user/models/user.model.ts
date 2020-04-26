export interface User {
  id: string;
  firstName: string;
  lastName: string;
  organization: {
    id: string;
    name: string;
    url: string;
  };
}
