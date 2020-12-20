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
                Click Refresh Button to Get Real-time Live Score Updates.
              </p>
              <br>
              <div class="buttons is-centered">
                <button id="installPWA" class="button is-info pwa-buttons" @click.prevent="showInstallPrompt()">
                  ⚛ Install App
                </button>
              </div>
              <div class="content table table is-bordered table is-striped table is-narrow table is-hoverable">
                <table>
                  <tbody>
                    <tr>
                      <th>🏏</th>
                      <td>{{ results.title }}</td>
                    </tr>
                    <tr>
                      <th>📊</th>
                      <td>{{ results.update }}</td>
                    </tr>
                    <tr>
                      <th>🔴</th>
                      <td>{{ results.current }}</td>
                    </tr>
                    <tr>
                      <th>📉</th>
                      <td>{{ results.runrate }}</td>
                    </tr>
                    <tr>
                      <th>✊</th>
                      <td>
                        {{ results.batsman }} - {{ results.batsmanrun }}{{ results.ballsfaced }}
                      </td>
                    </tr>
                    <tr>
                      <th>✊</th>
                      <td>{{ results.bowler }} - {{ results.bowlerover }} Over - {{ results.bowlerruns }} Run and {{ results.bowlerwickets }} Wicket</td>
                    </tr>
                    <tr>
                      <th>😳</th>
                      <td>{{ results.lastwicket }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="buttons is-centered">
                <button class="button is-warning pwa-button" @click.prevent="getResult">
                  {{ loading ? "Loading data..." : "🔄 Refresh Score" }}
                </button>
              </div>
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
export default {
  data () {
    return {
      showInstallPrompt: null,
      results: {}
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
    getResult () {
      this.loading = true
      axios.get('https://cricket-api.vercel.app/live.php').then((response) => { this.results = response.data.livescore; this.loading = false })
      this.$toast.success('Score Updated', {
        duration: 500
      }
      )
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap');
body {
  font-size: 16px;
  background-color: #1d3557;
   height: 100vh;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Nunito', sans-serif;
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
    background-color: rgba(45, 59, 255, 0.302);
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
.sign-button {
    max-width: 100%;
}
.sign-button {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    padding: 12px;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
   text-rendering: optimizelegibility !important;
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
    font-family: 'Nunito', sans-serif;
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
	min-height: 2.6rem;
}
.pwa-buttons {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 32px;
    padding: 8px;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
   text-rendering: optimizelegibility !important;
	width: 10rem !important;
	min-height: 2rem;
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
code {
    word-break: break-all;
}
pre code {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
}
.textbox {
    display: flex;
    flex-grow: 0.3;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 14px;
    border-radius: 32px;
    padding: 12px;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
   text-rendering: optimizelegibility !important;
}
blockquote {
    letter-spacing: .03em;
    font-family: 'Nunito', sans-serif;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
   text-rendering: optimizelegibility !important;
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
p {
    letter-spacing: .03em;
    word-wrap: break-word;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    color: #221f1f;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
   text-rendering: optimizelegibility !important;
}
.score {
    letter-spacing: .03em;
    word-wrap: break-word;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    color: #221f1f;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
   text-rendering: optimizelegibility !important;
}
hr {
    background-color: #00b894;
}
footer p {
    font-size: 15px;
    font-weight: 700;
}
</style>
