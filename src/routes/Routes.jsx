import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Banner from "../pages/Banner/Banner";
import Booking from "../pages/Booking/Booking";
import BookingRoom from "../pages/BookingRoom/BookingRoom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>,
                loader: () => fetch('http://localhost:5000/travel')
            },
            {
                path: '/travel/:id',
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`http://localhost:5000/travel/${params.id}`)
            }
        ]
    },
    {
        path: '/booking/:id',
        element: <BookingRoom></BookingRoom>,
        loader: ({ params }) => fetch(`http://localhost:5000/travel/${params.id}`)
    }
])

export default router;