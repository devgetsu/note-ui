import { ProjectModel } from "../project-interfaces/get-pr"

export interface PasswordModel {
    id: string
    program: string
    login: string
    pass: string
    projectId: string
    futureProject: ProjectModel
  }