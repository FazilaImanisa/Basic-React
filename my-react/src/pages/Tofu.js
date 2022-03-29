import { useEffect, useState } from "react";
import TofuList from "../components/TofuList";

export default function Tahu (props){
    let [tahuu, setTahu] = useState([])

    useEffect(() => {
        let arrTahu = [
            {
                tgl : `01-03-2022`,
                stok : 100,
                terjual : 85,
                rusak : 5,
                harga_dasar : 3000,
                harga_jual: 4500
            },
            {
                tgl : `04-03-2022`,
                stok : 50,
                terjual : 40,
                rusak : 5,
                harga_dasar : 3500,
                harga_jual: 4500
            },
            {
                tgl : `10-03-2022`,
                stok : 70,
                terjual : 60,
                rusak : 10,
                harga_dasar : 4000,
                harga_jual: 5000
            },
        ]
        setTahu(arrTahu)
    },[])
    return(
        <div className="container-fluid">
            {/*  map -> scanning data array */}
            {tahuu.map(item => (
                <TofuList 
                    key={`key-${item.tgl}`}
                    tgl={item.tgl}
                    stok={item.stok}
                    terjual={item.terjual}
                    rusak={item.rusak}
                    harga_dasar={item.harga_dasar}
                    harga_jual={item.harga_jual}
                    progress={item.progress}>
                </TofuList>
            ))}
        </div>
    )
}