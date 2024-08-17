import { Route, Routes } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Details } from '../Pages/Details'
import { CreateDish } from '../Pages/CreateDish'
import { EditDish } from '../Pages/EditDish'
import { Profile } from '../Pages/Profile'
import { Favorites } from '../Pages/Favorites'
import { Cart } from '../Pages/Cart'
import { Orders } from '../Pages/Orders'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/createdish' element={<CreateDish />} />
            <Route path='/editdish/:id' element={<EditDish />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/carts' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
        </Routes>
    )
}