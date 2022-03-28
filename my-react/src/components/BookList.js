export default function BookList(props) {

    return (
        <div className="row m-2 p-4" style={{ border: `1px solid lightgrey`, }}>
            {/** cover area */}
            <div className="col-lg-3">
                <img
                    src={props.cover}
                    width={`200px`}
                    height={`300px`}
                    alt={`Book's Cover`} />
            </div>

            {/**labels area */}
            <div className="col-lg-9">
                <h5>ISBN: {props.isbn}</h5>
                <h5>Title: {props.title}</h5>
                <h5>Creator: {props.creator}</h5>
                <h5>Publisher: {props.publisher}</h5>
                <h5>
                    Rating:
                    {[...Array(5)].map((item, index) => {
                        if (index < props.rating) {
                            return (
                                <b className="text-warning">
                                    <b className="fa fa-star"></b>
                                </b>
                            )
                        }
                        return (
                            <i className="fa fa-star"></i>
                        )
                    })}
                </h5>
                <h5>
                    Progress : 
                    <div className="progress">
                        <div className="progress-bar"
                            role="progress" 
                            style={{width: `${props.progress}%`}} 
                            aria-valuenow={props.progress} 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                        >
                            {`${props.progress}%`}
                        </div>
                    </div>        
                </h5>
            </div>
        </div>
    )
}