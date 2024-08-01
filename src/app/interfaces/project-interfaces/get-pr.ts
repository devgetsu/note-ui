import { EmployeeModel } from "../employee-interfaces/get-employee"
import { PasswordModel } from "../password-interfaces/get-password"

export interface ProjectModel {
    id: string
    clientName: string
    phoneNumber: string
    projectName: string
    amount: number
    budgetTarget: number
    received: number
    startingDate: string
    endingDate: string
    employees: EmployeeModel[]
    passwords: PasswordModel[]
  }