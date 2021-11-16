import {useState} from '/jk.js'

export default function initGlobalState() {
    
    // Init global state here
    useState([jk.global, 'someValue'], 423)
    console.log(jk)
    
}