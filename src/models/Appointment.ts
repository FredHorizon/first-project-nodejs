// import { uuidv4 } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
// import { v4: uuid_v4, v4: isUuid } from 'uuid';
uuidv4();

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.id = uuidv4();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
