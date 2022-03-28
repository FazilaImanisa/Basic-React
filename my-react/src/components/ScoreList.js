export default function ScoreList(props){
    let avg=(props.math + props.english + props.chemistry)/3
    if (avg >= 75){
        <span className="badge rounded-pill bg-success">Passed Yay!</span>
    } else{
        <span className="badge rounded-pill bg-danger">Try Again!</span>
    }
    return (
        <div className="row m-2 p-4" style={{ border: `1px solid lightgrey`, }}>
            {/* Nama dan ID*/}
            <div className="col-lg-3" >
                <div className="row-cols-md-2">
                    <h4 align="center">{props.nama}</h4>
                    <h4 align="center">{props.id}</h4>
                    <span className="badge rounded-pill bg-success">Passed Yay!</span>
                    
                </div>
            </div>

            <div className="row col-lg-9">
                <div>
                    <h5 align="center">Nilai</h5>
                    <hr></hr>
                </div>

                {/* Matematika */}
                <div className="col-lg-4" align="center">
                    <h5>Matematika</h5>
                    <h5>{props.math}</h5>
                </div>

                {/* English */}
                <div className="col-lg-4" align="center">
                    <h5>English</h5>
                    <h5>{props.english}</h5>
                </div>

                {/* Chemistry */}
                <div className="col-lg-4" align="center">
                    <h5>Chemistry</h5>
                    <h5>{props.chemistry}</h5>
                </div>

                <hr></hr>
                <h5>KKM : {avg.toFixed()}</h5>
            </div>

        </div>
    )
}