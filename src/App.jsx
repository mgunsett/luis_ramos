import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar from './components/UI/Navbar'
import HeroSplit from './components/Hero/HeroSplit'
import StatsSection from './components/Stats/StatsSection'
import VideosTemporadas from './components/Videos/VideosTemporadas'
import GalleryCarriles from './components/Gallery/GalleryCarriles'
import PressSection from './components/Press/PressSection'
import ContactTarjetas from './components/Contact/ContactTarjetas'
import FooterFirma from './components/UI/FooterFirma'
import AdminPage from './pages/AdminPage'

function Landing() {
  return (
    <Box as="main" bg="brand.dark" overflowX="hidden">
      <Navbar />
      <HeroSplit />
      <Box position="relative" zIndex={2}>
        <StatsSection />
        <VideosTemporadas />
        <GalleryCarriles />
        <PressSection />
        <ContactTarjetas />
        <FooterFirma />
      </Box>
    </Box>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/"          element={<Landing />} />
      <Route path="/admin"     element={<AdminPage />} />
    </Routes>
  )
}
