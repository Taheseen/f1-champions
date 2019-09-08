import service from '../../services/index'

export default {
  name: 'championList',
  data () {
    return {
      racers: '', // list of all the winners of season
      champions: '', // champions of season
      seasons: '' // 2005 - 2015
    }
  },
  methods: {

    /**
       * @method filterWinners
       * @description method to get the details of the winners of the particualar season.
       * On-click of the any year this function would be called.
       * @param season season (2005 - 2015) to be filtered
    */

    filterWinners: function (season) {
      service.getAllWinners(season).then(response => {
        this.data = response.data.MRData.RaceTable.Races
        this.racers = this.data.map(participant => {
          return {
            driver: participant.Results[0].Driver,
            position: participant.Results[0].position,
            car: participant.Results[0].Constructor.name,
            raceName: participant.raceName
          }
        })
        // Get only the driver details of particualr year and filter the null values
        this.champions = this.seasons.map(driver => {
          if (driver.season === season) {
            return driver.driver
          }
        }).filter(Boolean)
      })
    }
  },

  /**
     * @method beforeCreate
     * @description first function to be called in vue lifecycle. As we want to recieve all the api details
     * on load am calling this beforeCreate as it will reduce the waiting period for the user to see the content in the UI
  */
  async beforeCreate () {
    await service.getChampions().then(response => {
      this.championList = response.data.MRData.StandingsTable.StandingsLists
      this.seasons = this.championList.map(chapms => {
        return {
          season: chapms.season,
          driver: chapms.DriverStandings[0].Driver
        }
      })
    })
    this.filterWinners('2005')
  },

  // Component for displaying the winners of particular season
  components: {
    winnersList: require('../winnersList/winnersList.vue').default
  }
}
