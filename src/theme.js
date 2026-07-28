import { extendTheme } from '@chakra-ui/react'


// ─── PALETA OSCURA — Alianza Lima (escudo + camiseta, versión nocturna)
const brandDark = {
  brown:      '#0A1226', // base casi negra azulada (marino profundo)
  brownDark:  '#04070F', // negro marino
  brownLight: '#1E2E55', // sombra marina
  amber:      '#BFCFEC', // azul hielo (bordes/títulos)
  amber2:     '#bfcfec8e',
  amberDark:  '#7E93C4', // azul hielo oscuro
  amberLight: '#bfcfec4f', // azul hielo translúcido (bordes suaves)
  dorado:     '#FF5A63', // rojo camiseta luminoso (acentos destacados)
  orange:     '#4A67AD', // azul acero (hover botones)
  orangeDark: '#2C4780', // azul acero oscuro
  orangeLight:'#6B86CC', // azul acero claro
  dark:       '#0B14299f', // fondo marino casi negro (mantener alpha)
  dark3:      '#0B1429a1',
  dark2:      '#9AA6BE', // divisores neutros azulados
  gray:       '#93A3C4', // azul apagado (texto secundario)
  gray2:      '#4A5F94', // marino apagado (números grandes/relleno)
  bone:       '#FFFFFF', // texto principal
  boneWarm:   '#D8E2F5', // blanco azulado (detalles)
  rec:        '#FF4D57', // rojo del indicador REC
  bgRef:      '#4a67ad21', // bg de hover en cajas
}

// ─── PALETA CLARA — Alianza Lima (escudo + camiseta titular)
const brandLight = {
  brown:      '#FFFFFF', // superficie clara (tarjetas/nodos) — blanco camiseta
  brownDark:  '#E6EBF4', // azul-blanco profundo (sombras suaves)
  brownLight: '#2E4480', // azul medio (texto de apoyo)
  amber:      '#17285A', // azul marino del escudo (bordes/títulos)
  amber2:     '#17285a8e',
  amberDark:  '#0E1B3C', // marino oscuro
  amberLight: '#17285a40', // marino translúcido (bordes suaves)
  dorado:     '#E23744', // rojo de la camiseta (acentos destacados)
  orange:     '#1F3670', // hover de botones
  orangeDark: '#101F45', // hover de botones (oscuro)
  orangeLight:'#35509B', // hover de botones (claro)
  dark:       '#F4F6FB', // fondo blanco azulado (camiseta titular)
  dark3:      '#EDF1F8',
  dark2:      '#C3CCDF', // divisores sobre blanco
  gray:       '#5C6A88', // texto secundario azulado
  gray2:      '#8DA3C4', // azul apagado (números grandes/relleno)
  bone:       '#0D1730', // texto principal (casi negro marino)
  boneWarm:   '#17285A', // marino (detalles/labels)
  rec:        '#E63946', // rojo del indicador REC
  bgRef:      '#17285a12', // bg de hover en cajas
}


// Elegí la paleta de la landing:
const PALETTE = 'light'

const brand =
  PALETTE === 'light' ? brandLight :
  brandDark

// Colores de la firma del desarrollador (crédito en el footer)
const dev = {
  green: '#2D5A47',
  cream: '#E8D5A3',
}

const theme = extendTheme({
  colors: { brand, dev },
  fonts: {
    heading:   'Nippo',
    body:      `Nippo`,
    mono:      `Nippo`,
  },
  styles: {
    global: {
      'html, body': {
        bg: brand.dark,
        color: brand.bone,
        overflowX: 'hidden',
      },
      '::-webkit-scrollbar': { width: '4px' },
      '::-webkit-scrollbar-track': { bg: brand.dark },
      '::-webkit-scrollbar-thumb': { bg: brand.amber, borderRadius: '2px' },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export default theme
