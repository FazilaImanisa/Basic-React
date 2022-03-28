import { useEffect, useState } from "react"
import BookList from "../components/BookList"

export default function Book(props) {
    let [books, setBooks] = useState([])

    useEffect(() => {
        /** inisiasi state books */ 
        let arrBooks = [
            {
                isbn: 1, title: `Daredevil`, creator: `Stan Lee`,
                publisher: `Marvel Comics Groups`, income: 1000, rating: 3,
                cover: `https://cdn.shopify.com/s/files/1/0652/4771/products/Daredevil_16FINALSShopify_59c9e2bb-41fe-4217-a5b7-3974112212d5_800x.png?v=1596718396`,
                progress: 65
            },
            {
                isbn: 2, title: `Supergirl`, creator: `Malcolm Wheeler`,
                publisher: `Marvel`, income: 5000, rating: 4,
                cover: `http://static1.squarespace.com/static/58c35f74d1758e424ee76710/58c8a4bb1b10e3a1c3be7b01/5edc01434b689d06b8f3c0d0/1591476803493/Supergirl+041-000.jpg?format=1500w`,
                progress: 50
            },
            {
                isbn: 3, title: `Green Arrow`, creator: `Malcolm Wheeler`,
                publisher: `DC Comics`, income: 7000, rating: 5,
                cover: `https://www.previewsworld.com/SiteImage/MainImage/STL001428`,
                progress: 80
            }
        ]

        setBooks(arrBooks)
    }, [])

    return(
        <div className="container-fluid">
            {/*  map -> scanning data array */}
            {books.map(item => (
                <BookList 
                    key={`key-${item.isbn}`}
                    isbn={item.isbn}
                    title={item.title}
                    creator={item.creator}
                    publisher={item.publisher}
                    rating={item.rating}
                    cover={item.cover}
                    progress={item.progress}>
                </BookList>
            ))}
        </div>
    );
}
