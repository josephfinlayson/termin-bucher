
type RawAppointmentRequest = Record<number, string[]>

export const startTime = 8
export const endTime = 18

export enum Days {
     "MONDAY",
     "TUESDAY",
     "WEDNESDAY",
     "THURSDAY",
     "FRIDAY"
}

const mapper = {
    1: Days.MONDAY,
    2: Days.TUESDAY,
    3: Days.WEDNESDAY,
    4: Days.THURSDAY,
    5: Days.FRIDAY,
}
export class AppointmentTimeMapper {
    mapRequestToDB(req: RawAppointmentRequest)  {
        let chosenAppts: any[] = [] 
        for (const [prop, val] of Object.entries(req)) {
            const day = mapper[prop]
            const times = val.map((time) => Number(time) + Number(startTime)).map(num => String(num)).map((time=> ({time, day }))) 
            chosenAppts = [...chosenAppts, ...times]
            
        }
        return chosenAppts
    }   
}
