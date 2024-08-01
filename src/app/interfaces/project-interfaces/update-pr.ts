export interface UpdateProjectModel {
    id: string
    clientName: string
    phoneNumber: string
    projectName: string
    amount: number
    budgetTarget: number
    received: number
    startingDate: string
    endingDate: string
    employeePercent: number[]
  }