export interface AppointmentModel {
    //id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    email: string,
    mobile: string,
    createdAt: string,
    updatedAt: string,
    department: {
        departmentName: string,
        departmentCode: string
    }
}