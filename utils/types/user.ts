export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  department?: string;
  status: string;
}

export interface Users {
  totalCount: number;
  adminCount: number;
  studentCount: number;
  teacherCount: number;
  limit: number;
  page: 1;
  users: [];
}

interface UserRole {
  id: number;
  role: string;
}

export const UserRoles: UserRole[] = [
  { id: 1, role: "Admin" },
  { id: 2, role: "Teacher" },
  { id: 3, role: "Student" },
];

export enum UserStatus {
  active = "Active",
  Inactive = "Inactive",
}

export enum Cadre {
  trainee = "Trainee",
  tdo = "TDO",
}
