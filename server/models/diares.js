import moment from 'moment';
const diaries=  [
    {
      id: 1,
      title: "my diary",
      content:"happiness",
      date:moment().format('LL'),
      description: "Dear diary"
    },

    {
      id:2,
      title:" dear diary",
      conntent:"success",
      date:moment().format('LL'),
      description:"get diary "

    }
];

export default diaries;