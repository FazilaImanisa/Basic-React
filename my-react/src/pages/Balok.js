/**
 * STATE : tempat penyimpanan data (variabel) yang hanya berlaku di
 * lingkup satu komponen saja
 * komponen yang memanfaatkan state di dalam nya disebut komponen stateful,
 * sebaliknya komponen yang tidak memanfaatkan state di dalamnya disebut
 * komponen stateless
 */
import { useState } from "react";
function Balok(props){
    // prepare p l t v
    // mutator method -> fungsi untuk mengubah data pada variabel private
    let [panjang, setPanjang] = useState(0)
    let [lebar, setLebar] = useState(0)
    let [tinggi, setTinggi] = useState(0)
    let [volume, setVolume] = useState(0)

    let hitungVolume = () => {
        // mengubah nilai state volume menjadi (panjang * lebar * tinggi)
        setVolume(panjang * lebar * tinggi)
    }

    return(
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body" align="left">
                Panjang
                <input type={`number`} className="form-control" mb-2 
                value={panjang}
                onChange={ev => setPanjang(ev.target.value)}
                />

                Lebar
                <input type={`number`} className="form-control" mb-2 
                value={lebar}
                onChange={ev => setLebar(ev.target.value)} />

                Tinggi
                <input type={`number`} className="form-control" mb-2 
                value={tinggi}
                onChange={ev => setTinggi(ev.target.value)}/>

                <button className="btn btn-success"
                onClick={() => hitungVolume()}>
                    Hitung
                </button>

                <h4 className="text-primary">
                    {`volume ${props.title} adalah ${volume}`}
                </h4>
            </div>
        </div>
    )
}
export default Balok