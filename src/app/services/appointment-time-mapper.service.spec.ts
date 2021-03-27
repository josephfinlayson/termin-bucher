import { deepEqual, strictEqual } from 'assert'
import { type } from 'os'
import { AppointmentTimeMapper, Days } from './appointment-time-mapper.service'

describe('appointment time mapper', () => {
  it('should map correctly', () => {
    const tm = new AppointmentTimeMapper()
    const result = tm.mapRequestToDB({ 1: ['0', '1'] })
    deepEqual(result, [{ day: Days.MONDAY, time: '8' }, { day: Days.MONDAY, time: '9' }])
  })
})
