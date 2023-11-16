export default function Grid () {
    return(
    <div className="container text-start mt-5 mb-4 px-1 py-1" style= {{width:"1140px" , height:"867"}}>
        <div className="row mb-4 ">
            <div className="col-sm-8 ">
                <img src = './public/newsbig.png' alt = "news" style={{width:"745px", height:"422px",}}/>
            </div>
            <div className="col-sm-4">
                <div className="card" style={{width: "auto", height:"422px", borderRadius: "0" }}>
                    <img src="./public/news.png" className="card-img-top" alt="..." style={{ borderRadius: "0" }}/>
                <div className="card-body">
                    <a href="#" className="btn rounded-3 fs-4 fw-bold text-white" style = {{backgroundColor:"#FF0000"}}>SELASA, 14 FEB 2024</a>
                    <h5 className="card-title fs-3">KPU TETAPKAN 3 MENTOR TERBAIK </h5>
                    <p className="card-text fs-4">Super Admin</p>
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <div className="card" style={{width: "auto", height:"422px" ,borderRadius: "0" }}>
                    <img src="./public/news.png" className="card-img-top" alt="..." style={{ borderRadius: "0" }}/>
                        <div className="card-body">
                            <a href="#" className="btn rounded-3 fs-4 fw-bold text-white" style = {{backgroundColor:"#FF0000"}}>SELASA, 14 FEB 2024</a>
                            <h5 className="card-title fs-3">KPU TETAPKAN 3 MENTOR TERBAIK </h5>
                            <p className="card-text fs-4">Super Admin</p>
                        </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card" style={{width: "auto", height:"422px", borderRadius: "0" }}>
                    <img src="./public/news.png" className="card-img-top" alt="..."style={{ borderRadius: "0" }}/>
                        <div className="card-body">
                            <a href="#" className="btn rounded-3 fs-4 fw-bold text-white"  style = {{backgroundColor:"#FF0000"}}>SELASA, 14 FEB 2024</a>
                            <h5 className="card-title fs-3">KPU TETAPKAN 3 MENTOR TERBAIK </h5>
                            <p className="card-text fs-4">Super Admin</p>
                        </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card" style={{width: "auto", height:"422px", borderRadius: "0" }}>
                    <img src="./public/news.png" className="card-img-top" alt="..." style={{ borderRadius: "0" }}/>
                        <div className="card-body">
                            <a href="#" className="btn rounded-3 fs-4 fw-bold text-white" style = {{backgroundColor:"#FF0000"}}>SELASA, 14 FEB 2024</a>
                            <h5 className="card-title fs-3">KPU TETAPKAN 3 MENTOR TERBAIK </h5>
                            <p className="card-text fs-4">Super Admin</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}