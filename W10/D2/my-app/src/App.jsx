import { useState } from 'react'
import './App.css'
import { UseContextIntro } from './components/P1'
import { CustomHooksIntro } from './components/P2'
import { UseDocumentTitle } from './components/P2'
import { UseRefIntro } from './components/P3'
import { UseReducerIntro } from './components/P4'

function App() {
  return (
    <>
     {/* <UseContextIntro/> */}
     {/* <CustomHooksIntro/> */}
     {/* <UseRefIntro/> */}
     <UseReducerIntro/>
    </>
  )
}

export default App
