import { useEffect, useState } from "react";
import ScoreList from "../components/ScoreList";

export default function Score(props){
    let [scores, setScores] = useState([])

    useEffect(() => {
        let arrScores = [
            {
                id: 1, nama: `Aira Johnson`, 
                math: 80, english: 90, chemistry: 70,
            },
            {
                id: 2, nama: `Scarlette Mahatam`, 
                math: 40, english: 80, chemistry: 79,
            },
            {
                id: 3, nama: `Michael Oka Wahyu`, 
                math: 50, english: 87, chemistry: 60,
            },
            {
                id: 4, nama: `Mama Zila`, 
                math: 70, english: 78, chemistry: 80,
            },
            {
                id: 5, nama: `Essa Adilla Rahmandito`, 
                math: 50, english: 80, chemistry: 56,
            },
        ]

        setScores(arrScores)
    },[])

    let hitung=(math,english,chemistry) => {
        let hasil = (math + english + chemistry)/3;
        return hasil
    }
        

    let status = (rataRata) => {
        if (rataRata>= 75){
            return (
                <span className="badge rounded-pill bg-success">Passed</span>
            )
        } else if(rataRata <= 74){
            return (
                <span className="badge rounded-pill bg-danger">Try Again</span>
            )
        }
    }

    return(
        <dvi className="container-fluid">
            {/*  map -> scanning data array */}
            {scores.map(item => (
                <ScoreList
                    key={`key-${item.id}`}
                    id={item.id}
                    nama={item.nama}
                    math={item.math}
                    english={item.english}
                    chemistry={item.chemistry}
                    rata={hitung(item.math, item.english, item.chemistry)}
                    status={status(hitung(item.math, item.english, item.chemistry))}>
                </ScoreList>
            ))}
        </dvi>
    );
}