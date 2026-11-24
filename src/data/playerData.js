import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdStats } from 'react-icons/io'

//Hero
import polaco1 from '@assets/polaco1.webp'
import heroFestejo from '@assets/hero_festejo.webp'
//Menú (navbar)
import retratoMenu from '@assets/retrato_menu.webp'

import peru from '@assets/peru.webp'
import alianzaLima from '@assets/escudo_alianza.webp'
//Escudos trayectoria
import escudoAmerica from '@assets/escudos/escudo_america.webp'
import escudoChankas from '@assets/escudos/escudo_chankas.webp'
import escudoCusco from '@assets/escudos/escudo_cusco.webp'
import escudodepMunicipal from '@assets/escudos/escudo_depMunicipal.webp'
import escudoLlacuabamba from '@assets/escudos/escudo_llacuabamba.webp'
import escudoMannucci from '@assets/escudos/escudo_mannucci.webp'
import escudoPeru from '@assets/escudos/escudo_peru.webp'
//Gallery
import image1 from '@assets/gallery/image1.webp'
import image2 from '@assets/gallery/image2.webp'
import image3 from '@assets/gallery/image3.webp'
import image4 from '@assets/gallery/image4.webp'
import image5 from '@assets/gallery/image5.webp'
import image6 from '@assets/gallery/image6.webp'
import image7 from '@assets/gallery/image7.webp'
import image8 from '@assets/gallery/image8.webp'
import image9 from '@assets/gallery/image9.webp'
import image10 from '@assets/gallery/image10.webp'
import image11 from '@assets/gallery/image11.webp'
import image12 from '@assets/gallery/image12.webp'
import image13 from '@assets/gallery/image13.webp'
import image14 from '@assets/gallery/image14.webp'
import image15 from '@assets/gallery/image15.webp'
import image16 from '@assets/gallery/image16.webp'
//Video
import photoGraph from '@assets/perfil_video.webp'
//Prensa
import logo1 from '@assets/logos/logo1.webp'
import logo2 from '@assets/logos/logo2.webp'
import logo3 from '@assets/logos/logo3.webp'
//Redes
import transfermkt from '@assets/contact2.svg'
import ledsports from '@assets/contact3.webp'
import moon from '@assets/contact4.webp'


const name = 'LUIS'
const fullName = 'RAMOS'

export const playerData = {
  name,
  fullName,
  initials: `${name[0]}${fullName[0]}`,
  displayName: `${name} ${fullName}`,
  number: 9,
  position: 'Delantero',
  positionShort: 'DC',
  nationality: 'Peruano',
  country: 'Perú',
  nationalityFlag: peru,
  age: 26,
  height: '1.83m',
  weight: '75kg',
  foot: 'Derecho',
  birthDate: '13 / 12 / 1999  ',
  birthPlace: 'Trujillo, Perú',
  currentClub: 'Alianza Lima',
  logoCurrentClub: alianzaLima,
  image: polaco1,
  // Hero (Split con ficha): recorte PNG/WebP con fondo transparente
  heroCutout: heroFestejo,
  heroCutoutAlt: 'Luis Ramos festeja con los brazos abiertos y la camiseta 9 de Alianza Lima',
  // Navbar (Índice a pantalla completa): retrato vertical del menú
  menuPortrait: retratoMenu,
  menuPortraitAlt: 'Retrato de Luis Ramos',
  

  stats: [
    { label: 'Velocidad',      value: 84 },
    { label: 'Remate',     value: 89 },
    { label: 'Regate',         value: 83 },
    { label: 'Pases',    value: 79 },
    { label: 'Presión Alta',   value: 87 },
    { label: 'Visión de Juego',value: 89 },
  ],

  seasonStats: [
    { label: 'Partidos',    value: 63},
    { label: 'Goles',       value: 15},
    { label: 'Oportunidades', value: 29},
    { label: 'Tiros al arco', value: 37},
    { label: 'Min / Part.', value: "2,858'" },
    { label: 'Valoración', value: 8.5},

  ],

  clubs: [
    {
      name:    'Alianza Lima',
      country: 'Perú',
      years:   '2026 — Actualidad',
      logo:    alianzaLima,
      titles:  ['Torneo Apertura 2026'],
      goals:   null,  // goles con el club (todas las competencias)
      info:    '',
    },
    {
      name:    'Selección Perú',
      country: 'Perú',
      years:   '2024 — Actualidad',
      logo:    escudoPeru,
      titles:  [],
      goals:   null,  // goles con el club (todas las competencias)
      info:    '',
    },
    {
      name:    'America de Cali',
      country: 'Colombia',
      years:   '2025',
      logo:    escudoAmerica,
      titles:  [],
      goals:   12,  // goles con el club (todas las competencias)
      info:    'Préstamo',
    },
    {
      name:    'Cusco F.C.',
      country: 'Perú',
      years:   '2024',
      logo:    escudoCusco,
      titles:  [],
      goals:   11,  // goles con el club (todas las competencias)
      info:    '',
    },
    {
      name:    'Los Chankas F.C.',
      country: 'Perú',
      years:   '2023',
      logo:    escudoChankas,
      titles:  [],
      goals:   19,  // goles con el club (todas las competencias)
      info:    '',
    },
    {
      name:    'Deportivo Municipal',
      country: 'Perú',
      years:   '2022 — 2023',
      logo:    escudodepMunicipal,
      titles:  [],
      goals:   2,  // goles con el club (todas las competencias)
      info:    '',
    },
    {
      name:    'Dep. Llacuabamba',
      country: 'Perú',
      years:   '2021 — 2022',
      logo:    escudoLlacuabamba,
      titles:  [],
      goals:   10,  // goles con el club (todas las competencias)
      info:    '',
    },
    {
      name:    'C.A. Mannucci',
      country: 'Perú',
      years:   '2019 — 2020',
      logo:    escudoMannucci,
      titles:  [],
      goals:   null,  // goles con el club (todas las competencias)
      info:    'Debút profesional',
    },
  ],

  // Videos "Temporadas": year = año del video (va gigante), club y clubLogo arriba del reel
  videos: [
    {
      id: 'v2',
      instagramId: 'DaEvRiyOIXL',
      title: 'Alianza Lima \'26',
      fullTitle: 'Jugadas destacadas \'26',
      season: 'Alianza Lima \'26',
      league: 'Liga 1 · Perú',
      year: '26',
      club: 'Alianza Lima',
      clubLogo: alianzaLima,
      thumbnail: image1,
      cover: image1,
      category: 'Highlights',
    },
    {
      id: 'v3',
      instagramId: 'DPaIw9xjjds',
      title: 'Gol America de Cali \'25',
      fullTitle: 'Gol con América de Cali \'25',
      season: 'Gol America de Cali \'25',
      league: 'Liga BetPlay · Colombia',
      year: '25',
      club: 'América de Cali',
      clubLogo: escudoAmerica,
      thumbnail: image15,
      cover: image15,
      category: 'Gol',
    },
    {
      id: 'v4',
      instagramId: 'DBXRQzgP80c',
      title: 'Selección Perú',
      fullTitle: 'Jugadas destacadas con Perú',
      season: 'Selección Perú',
      league: 'Eliminatorias',
      year: '24',
      club: 'Selección Perú',
      clubLogo: escudoPeru,
      thumbnail: image5,
      cover: image5,
      category: 'Selección',
    },
  ],

  // Galería: group = 'u' club actual, 's' selección, 'c' clubes anteriores (los carriles muestran el orden de esta lista)
  gallery: [
    { id: 11, src: image11, alt: 'Levanta el trofeo del Apertura entre fotógrafos', group: 'u', category: 'Alianza Lima' },
    { id: 13, src: image13, alt: 'Festeja el título con el trofeo en alto', group: 'u', category: 'Alianza Lima' },
    { id: 8, src: image8, alt: 'Conduce la pelota con la camiseta de Perú', group: 's', category: 'Selección' },
    { id: 1, src: image1, alt: 'En el campo con la camiseta de Alianza Lima', group: 'u', category: 'Alianza Lima' },
    { id: 12, src: image12, alt: 'El plantel de Alianza Lima campeón del Apertura', group: 'u', category: 'Alianza Lima' },
    { id: 14, src: image14, alt: 'Con su familia y el trofeo de campeón', group: 'u', category: 'Alianza Lima' },
    { id: 3, src: image3, alt: 'Disputa la pelota ante Colombia', group: 's', category: 'Selección' },
    { id: 4, src: image4, alt: 'En la cancha con la Selección Peruana', group: 's', category: 'Selección' },
    { id: 5, src: image5, alt: 'Protege la pelota ante un rival de Colombia', group: 's', category: 'Selección' },
    { id: 6, src: image6, alt: 'Remate en el área con la camiseta de Perú', group: 's', category: 'Selección' },
    { id: 7, src: image7, alt: 'Controla la pelota en el aire con Perú', group: 's', category: 'Selección' },
    { id: 2, src: image2, alt: 'Llegada con la delegación de la Selección', group: 's', category: 'Selección' },
    { id: 9, src: image9, alt: 'Llegada al estadio con la ropa de la Selección', group: 's', category: 'Selección' },
    { id: 10, src: image10, alt: 'Retrato con la camiseta de la Selección', group: 's', category: 'Selección' },
    { id: 15, src: image15, alt: 'Festeja un gol con América de Cali', group: 'c', category: 'Clubes anteriores' },
    { id: 16, src: image16, alt: 'Grita un gol con los brazos abiertos en América de Cali', group: 'c', category: 'Clubes anteriores' },
  ],

  // Prensa "Nota destacada": la primera va grande con photo de fondo; summary es la bajada
  press: [
    {
      media: 'Win Sports',
      logo:  logo1,
      title: 'Con doblete de Luis Ramos, América venció 2-0 al DIM y quedó primero',
      summary: 'Dos goles del peruano para el triunfo de América de Cali y la punta de la Liga BetPlay.',
      photo: image16,
      date:  'Mayo 2025',
      url:   'https://www.instagram.com/reels/DKGMWJmJsNK/',
    },
    {
      media: 'CONMEBOL Sudamericana',
      logo:  logo3,
      title: '¿Gol? ¡Golazo de Luis Ramos para América de Cali!',
      date:  'Abril 2025',
      url:   'https://www.instagram.com/reels/DINZEdxx7Ci/',
    },
    {
      media: 'Cusco FC',
      logo:  logo2,
      title: 'Su gol con Cusco, nominado al Mejor Gol del Año 2024',
      date:  'Enero 2025',
      url:   'https://www.instagram.com/reels/DETBg0ehPo3/',
    },
  ],

  socialMedia: [
    {
      label: 'Instagram',
      icon: FaInstagram,
      iconBg: FaInstagram,
      handle: '@luisramos_09',
      url: 'https://www.instagram.com/luisramos_09/',
      hoverColor: '#E1306C',
      hoverGradient: 'insta-gradient',
    },
    {
      label: 'TransferMarkt',
      image: transfermkt,
      iconBg: IoMdStats,
      handle: '/luis-ramos',
      url: 'https://www.transfermarkt.com.ar/luis-ramos/profil/spieler/687529',
      hoverColor: '#2e73f2',
    },
  ],

  contact: [
    {
      title:      'Representante Deportivo',
      label:      'Moon Sports Group',
      image:       moon,
      handle:     '@moonsportsgroup_',
      url:        'https://www.instagram.com/moonsportsgroup_/',
      hoverColor: 'rgba(19, 81, 139, 0.2)',
      borderColor: 'rgb(19, 81, 139)',
    },
    {
      title:      'Contacto Marketing',
      label:      'led sports marketing',
      image: ledsports,
      handle:     '@_ledsports',
      url:        'https://www.instagram.com/_ledsports/',
      hoverColor: 'rgba(212,168,75,0.18)',
      borderColor: 'rgb(129, 103, 46)',
    },
  ],
}
