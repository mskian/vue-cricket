<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div>
      <br>
      <br>
      <section class="section">
        <div class="container ">
          <div class="columns is-centered">
            <div class="column is-half">
              <h1 class="title has-text-warning has-text-centered">
                Live Score 🏏
              </h1>
              <p class="has-text-success has-text-weight-bold has-text-centered">
                Click Refresh Button to Get Real-time Live Cricket Score Updates.
              </p>
              <br>
              <div class="buttons is-centered">
                <button id="installPWA" class="button is-info pwa-buttons" @click.prevent="showInstallPrompt()">
                  🍪 Install App
                </button>
              </div>
              <div class="content table table is-bordered table is-striped table is-narrow table is-hoverable">
                <table v-if="results.livescore !== 'Data Not Found'">
                  <tbody>
                    <tr>
                      <th>🏏</th>
                      <td v-if="results.title === 'Data Not Found'">
                        {{ loading ? "Loading Match data" : 'No Live Match' }}
                      </td>
                      <td v-else>
                        {{ loading ? "Loading Match data" : results.title }}
                      </td>
                    </tr>
                    <tr>
                      <th>📊</th>
                      <td v-if="results.update === 'Data Not Found'">
                        {{ loading ? "Loading Match data" : 'No Live Match' }}
                      </td>
                      <td v-else>
                        {{ loading ? "Loading Match data" : results.update }}
                      </td>
                    </tr>
                    <tr>
                      <th>🔴</th>
                      <td v-if="results.livescore === 'Data Not Found'">
                        {{ loading ? "Loading Match data" : 'No Live Match' }}
                      </td>
                      <td v-else>
                        {{ loading ? "Loading Match data" : results.livescore }}
                      </td>
                    </tr>
                    <tr>
                      <th>📉</th>
                      <td v-if="results.runrate === 'Data Not Found'">
                        {{ loading ? "Loading Match data" : 'No Live Match' }}
                      </td>
                      <td v-else>
                        {{ loading ? "Loading Match data" : 'Run rate: ' + results.runrate }}
                      </td>
                    </tr>
                    <tr>
                      <th>🏏</th>
                      <td v-if="results.batterone === 'Data Not Found'">
                        {{ loading ? "Loading Match data" : 'No Live Match' }}
                      </td>
                      <td v-else>
                        {{ loading ? "Loading Match data" : results.batterone }} {{ loading ? "" : "\t" + "-" + "\t Run: " + results.batsmanonerun }}{{ loading ? "" : "\t" + " - Balls Faced: " + results.batsmanoneball}}
                      </td>
                    </tr>
                    <tr>
                      <th>🥎</th>
                      <td v-if="results.bowlerone === 'Data Not Found'">
                        {{ loading ? "Loading Match data" : 'No Live Match' }}
                      </td>
                      <td v-else>
                        {{ loading ? "Loading Match data" : results.bowlerone }} {{ loading ? " " : "\t" + "-" + "\t" + results.bowleroneover }} {{ loading ? " " : " Over" + "\t" + results.bowleronerun }} {{ loading ? " " : " Run and" + "\t" + results.bowleronewickers + "\t" + "Wicket" }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table v-else-if="results.livescore === 'Data Not Found'">
                  <tbody>
                    <tr>
                      <td>
                        <p class="has-text-centered">
                          {{ loading ? "Loading Match data" : "🔴 Sorry Currently No Live Match" }}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table v-else>
                  <tbody>
                    <tr>
                      <td>
                        <p class="has-text-centered">
                          {{ loading ? "Loading Match data" : "🔴 No Live Match Data" }}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="results.livescore !== 'Data Not Found'" class="buttons is-centered">
                <button class="button is-warning pwa-button" @click.prevent="getResult">
                  {{ loading ? "🔄 Updating Score" : "🔄 Refresh Score" }}
                </button>
              </div>
              <form
                v-if="results.livescore === 'Data Not Found'"
                method="GET"
              >
              <div class="container">
              <div class="field has-addons">
              <input
                id="match"
                name="match"
                class="input is-info score-random"
                placeholder="Enter Match ID"
                required
              />
              <button
                class="button is-success score-random"
              >
                Get Score
              </button>
              </div>
              </div>
              </form>
              <br>
              <div class="notification is-warning">
                <br>
                <p class="has-text-weight-bold has-text-centered">
                  Our Free Telegram Bot Just start and Get Live Score Update.
                  <br>
                  <br>
                  <span class="buttons is-centered">
                    <a href="https://telegram.me/livecriscore_bot" class="button is-danger read-random" target="_blank" rel="nofollow noopener">🤖 Start Bot</a>
                  </span>
                  <br>
                  This Web App was Dedicated to Cricket Lovers 💚<br>
                  Scores are Fetched from Cricbuzz - Unofficial API Data.
                </p>
                <br>
                <div class="buttons is-centered">
                  <a href="https://github.com/mskian/vue-cricket" class="button is-success read-random" target="_blank" rel="nofollow noopener">📦 Souce Code</a>
                  <a href="https://github.com/mskian/python-cricket-score/tree/main/api" class="btn button is-link read-random" target="_blank" rel="nofollow noopener">🗃 API Data</a>
                </div>
                <br>
              </div>
              <br>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash'
import intializePwa from '~/helpers/pwa'
import 'bulma/css/bulma.min.css'
export default {
  data () {
    return {
      showInstallPrompt: null,
      results: {}
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://score.mskian.com' + this.$route.path
        }
      ]
    }
  },
  async mounted () {
    this.showInstallPrompt = await intializePwa()
  },
  beforeMount () {
    this.getResult()
  },
  created () {
    this.debounceName = debounce(this.getResult)
  },
  methods: {
    async getResult () {
      this.loading = true
      if(this.$route.query.match === undefined) {
        const url = process.env.LIVE_URL
        const response = await axios.get(url);
        await axios.get(process.env.API_URL + response.data.data_id).then((response) => { this.results = response.data; this.loading = false })
      } else {
        await axios.get(process.env.API_URL + this.$route.query.match).then((response) => { this.results = response.data; this.loading = false })
      }
      this.$toast.success('Score Updated', {
        duration: 500
      }
      )
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
body {
  font-size: 16px;
  background-color: #1d3557;
   height: 100vh;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  line-height: 1.618;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
  overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(182, 241, 87, 0.302);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(191, 18, 253, 0.5);
}
h1{font-weight:700;font-size:23px;}
h2{font-weight:700;font-size:21px;}
h3{font-weight:700;font-size:20px;}
h4{font-weight:700;font-size:18px;}
h5{font-weight:700;font-size:18px;}
h1, h2, h3, h4, h5, h6 {
    color: #050505;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -o-hyphens: auto;
    hyphens: auto;
}
.title{
  color:#d9ee1c;
  font-weight: 700;
}
a:hover, a:focus, a:active {
    color: #010508;
}
.content a {
    color: #ffffff;
}
.notice {
    max-width: 25rem;
}
.input-box,
textarea,
.sign-button {
  width: 45rem !important;
  min-height: 3rem;
}
button {
    max-width: 100%;
}
.pwa-button {
    font-family: 'Fira Code', monospace;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 32px;
    padding: 12px;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
    text-rendering: optimizelegibility !important;
    width: 12rem !important;
    min-height: 2.2rem;
}
.pwa-buttons {
    font-family: 'Fira Code', monospace;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 32px;
    padding: 12px;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
    text-rendering: optimizelegibility !important;
    width: 10rem !important;
    min-height: 2.2rem;
}
table {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 12px;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
   text-rendering: optimizelegibility !important;
   border-bottom:2px solid #bbb !important;background-color:#d3d3d3
}
th {
   white-space: nowrap;
}
.cooked table thead,.d-editor-preview table thead{border-bottom:2px solid #bbb !important;background-color:#d3d3d3}.cooked table tr,.d-editor-preview table tr{border-bottom:1px solid #bbb}
.is-horizontal-center {
    justify-content: center;
}
.buttonpwa {
display: inline-flex;
margin: 4px 0;
padding: 8px 16px;
border-radius: 4px;
background-color: rgb(253, 98, 37);
color: #fff;
font-size: 18px;
cursor: pointer;
align-items: center;
justify-content: center;
flex-grow: 1;
}
.buttonpwa:hover {
    background-color: rgb(248, 221, 68);
}
.content h1 {
    font-size:21px;
    font-weight: 700;
}
.content h2 {
    font-size:21px;
    font-weight: 700;
}
.content h3 {
    font-size:20px;
    font-weight: 700;
}
.content h4 {
    font-size:18px;
    font-weight: 700;
}
.read-random {
display: flex;
flex-grow: 0.3;
font-family: 'Fira Code', monospace;
font-weight: 800;
font-size: 13px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
border-radius: 32px;
padding: 10px;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased !important;
-moz-font-smoothing: antialiased !important;
text-rendering: optimizelegibility !important;
}
.score-random {
display: flex;
flex-grow: 0.3;
font-family: 'Fira Code', monospace;
font-weight: 800;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
border-radius: 32px;
padding: 20px;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased !important;
-moz-font-smoothing: antialiased !important;
text-rendering: optimizelegibility !important;
}
</style>
