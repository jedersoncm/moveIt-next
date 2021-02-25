import '../style/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
// import { CountdownPrivider } from '../contexts/CountdownContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      {/* <CountdownPrivider> */}
       <Component {...pageProps} />
      {/* </CountdownPrivider> */}
    </ChallengesProvider>
  )
}

export default MyApp
