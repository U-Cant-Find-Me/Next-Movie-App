import { Container } from '@mui/material'
import Header from '../components/Header'
import SimpleBottomNavigation from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container >
        <Component {...pageProps} />
      </Container>
      <SimpleBottomNavigation />
    </>
  )
}

export default MyApp
