import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '../components/pages/MainPage'
import NotFoundPage from '../components/pages/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/> } />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter