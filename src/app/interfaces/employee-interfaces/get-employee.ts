import { ProjectModel } from "../project-interfaces/get-pr"

export interface EmployeeModel {
  id: string
  fullName: string
  userName: string
  phoneNumber: string
  position: string
  salary: number
  givenSalary: number
  salaryDate: string
  employmentDate: string
  percent: number
  fine: number
  description: string
  fineDate: string
  remainedSalary: number
  
  projects: ProjectModel[];
}
