import dotenv from 'dotenv';

dotenv.config();

class Diary {
  constructor ( id, title, date, description) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.description = description;
  }
}
    

export default Diary;