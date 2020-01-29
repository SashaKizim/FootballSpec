import axios from 'axios'


export default class FootballServise {

    


      static getResource(body) {
          console.log("seria a");
          return axios.get('https://api.football-data.org/v2/competitions' + body, {
            headers: {
                'X-Auth-Token': '837f8a63629049f6bc8290c067f78bf5'
            }
        })
        


    }
}

