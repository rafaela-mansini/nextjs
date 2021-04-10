import Navbar from 'components/Navbar'
import ActiveResource from 'components/ActiveResource'
import Footer from 'components/Footer'

const Layout = ({ children }) => {
  return(
    <>
      <Navbar />
      <ActiveResource />
      { children }
      <Footer />
    </>
  )
}

export default Layout