const marching_blob = await fetch('https://cdn.jsdelivr.net/gh/charlieroberts/marching@main/dist/index.js')
const marching_txt = await res.text()
eval( marcing_txt )

window.screamer = await import('https://cdn.jsdelivr.net/gh/charlieroberts/screamer@latest/screamer.js')
window.screamer = screamer.default

const screamerlang_blob = await fetch('https://cdn.jsdelivr.net/gh/charlieroberts/screamer@latest/screamer-lang.js')
const screamerlang_txt = await screamerlang.text()
eval( screamerlang_txt )

screamer.initHydra = function() {}
screamer.init()

const canvas        = document.createElement('canvas')
canvas.width  = window.width
canvas.height = window.height

Marching.init( canvas )
Marching.export( window )
Marching.materials.__clearOnEmit = false

const prefix = `render = med lighting = () camera = (0 0 5) fog = (0 0 0 0) post = () background = (0 0 0)\n`
const scream = code => screamer.run( prefix + code )
scream.canvas = canvas

export default scream
