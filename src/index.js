import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { FormProvider } from './context'
import './base.css'

ReactDOM.render(
  <FormProvider>
    <App />
  </FormProvider>,
  document.getElementById('root')
)
