export default function TofuList(props) {

    return (
        <div className="row m-2 p-4" style={{ border: `1px solid lightgrey`, }}>

            <div className="col-lg-3 p-2">
                <div className="" style={{ border: `1px solid black`, }}>
                    <h5 align="center">Tanggal</h5>
                    <h5 align="center">{props.tgl}</h5>
                </div>
            </div>

            <div className="col-lg-3 p-2">
                <div className="bg-info" style={{ border: `1px solid black`, }}>
                    <h5 align="center">Stok Awal</h5>
                    <h5 align="center">{props.stok} Kg</h5>
                </div>
            </div>

            <div className="col-lg-3 p-2">
                <div style={{ background: "#40c970", border: `1px solid black`, }}>
                    <h5 align="center">Terjual</h5>
                    <h5 align="center">{props.terjual} Kg</h5>
                </div>
            </div>

            <div className="col-lg-3 p-2">
                <div className="bg-danger text-white" style={{ border: `1px solid black`, }}>
                    <h5 align="center">Rusak</h5>
                    <h5 align="center">{props.rusak} Kg</h5>
                </div>
            </div>

            <div className="col-lg-6 p-2">
                <div align="center" style={{ background: "#9ea39f", border: `1px solid black`, }}>
                    <h5> Keuntungan :</h5>
                    <h5>Rp. 40.000</h5>
                </div>

            </div>
            <div className="col-lg-6 p-2">
                <h5>Persentase :</h5>
                <h5>
                    <div className="progress">
                        <div className="progress-bar bg-info" role="progress" style={{ width: `${props.progress}%` }} aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100">
                            {`${props.progress}`}
                        </div>
                    </div>
                </h5>
            </div>
        </div>
    )
}