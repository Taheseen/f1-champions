import CONSTANTS from '../constants'
import axios from 'axios'

export default {

  /**
   * @method getChampions
   * @description method to fetch the champion details from the api
   * @param CONSTANTS neccesary contant value for calling the api
   */

  getChampions () {
    const offset = CONSTANTS.START_YEAR - CONSTANTS.BEGINNING_YEAR
    const limit = CONSTANTS.FINISH_YEAR - CONSTANTS.START_YEAR + 1
    return axios
      .get(
        `${
          CONSTANTS.API_BASE_URL
        }/driverStandings/1.json?limit=${limit}&offset=${offset}`
      )
  },

  /**
   * @method getAllWinners
   * @description method to fetch the list of all winners of particular season
   * @param CONSTANTS neccesary contant value for calling the api
   */

  getAllWinners (season) {
    return axios
      .get(
        (`${CONSTANTS.API_BASE_URL}/${season}/results/1.json`)
      )
  }
}
