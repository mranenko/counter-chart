import { Page } from './components/common/Page'
import { CounterChart } from './components/counter/CounterChart'
import { CounterInput } from './components/counter/CounterInput'
import './assets/styles/index.css'

const App = () => {
  return (
    <Page>
      <h1>Counter Chart</h1>
      <CounterChart />
      <CounterInput />
    </Page>
  )
}

export { App }
