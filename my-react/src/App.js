// import semua pages yg akan kita tampilkan
import Balok from "./pages/Balok"
import Book from "./pages/Book"
import Student from "./pages/Student"
import Score from "./pages/Score"
import Navbar from "./components/Navbar"

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App(){
  return(
    <BrowserRouter basename="/my-react">
      {/* BrowserRouter adalah element yg digunakan utk mengatur tampilan
        pada halaman web berdasarkan path atau URL yang ditentukan oleh user */}
      <Navbar />
        <Routes> {/* Routes itu grouping (majemuk) */}
          <Route path="/balok" element={<Balok />} /> {/* Route itu pendefinisian satu jalur */}
          <Route path="/book" element={<Book />}/>
          <Route path="/student" element={<Student />}/>
          <Route path="/score" element={<Score />}/>
        </Routes>
    </BrowserRouter>
  )
}