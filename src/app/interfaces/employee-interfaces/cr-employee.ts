export interface CreateEmployeeModel {
    fullName: string
    phoneNumber: string
    position: string
    salary: number
    givenSalary: number
    salaryDate: string
    employmentDate: string
    percent: number
    fine ?: number
    description ?: string
    fineDate ?: string
    remainedSalary ?: number
}
