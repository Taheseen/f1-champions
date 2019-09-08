import CONSTANTS from '../constants'
import axios from 'axios'

export default {
  getList () {
    const offset = CONSTANTS.START_YEAR - CONSTANTS.BEGINNING_YEAR
    const limit = CONSTANTS.FINISH_YEAR - CONSTANTS.START_YEAR + 1
    return axios
      .get(
        `${
          CONSTANTS.API_BASE_URL
        }/driverStandings/1.json?limit=${limit}&offset=${offset}`
      )
  },
  getAllWinners (season) {
    return axios
      .get(
        (`${CONSTANTS.API_BASE_URL}/${season}/results/1.json`)
      )
  }
}
