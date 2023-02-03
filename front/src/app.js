import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routers/AppRouter'

const jsx = (
    <AppRouter />
)

const root = createRoot(document.getElementById('app'))
root.render(jsx)