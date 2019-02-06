// const Pessoa = require('./pessoa')
import Pessoa from './pessoa'
// import './modulos/moduloA'
import './assets' // Por padrão, procurará o index.js

const npc = new Pessoa
alert(npc.cumprimentar());