import service from '../services/index'
export default {
  name: 'championList',
  data () {
    return {
      racers: '',
      winners: '',
      showPanel: false
    }
  },
  props: {
    msg: String
  },
  methods: {
    filterWinners: function (season, index) {
      this.showPanel = index
      service.getAllWinners(season).then(response => {
        this.data = response.data.MRData.RaceTable.Races
        this.racers = this.data.map(participant => {
          console.log(participant, 'participant')
          return {
            driver: participant.Results[0].Driver,
            position: participant.Results[0].position,
            car: participant.Results[0].Constructor.name,
            raceName: participant.raceName
          }
        })
      })
    }
  },
  beforeCreate () {
    service.getList().then(response => {
      this.championList = response.data.MRData.StandingsTable.StandingsLists
      this.winners = this.championList.map(chapms => {
        return {
          season: chapms.season,
          driver: chapms.DriverStandings[0].Driver
        }
      })
      this.filterWinners('2005')
    })
  },
  components: {
    winnersList: require('./winnersList/winnersList.vue').default
  }
}
