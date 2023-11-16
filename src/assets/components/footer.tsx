export default function Footer () {
    return(
        <div>
            <footer className=" card footer ">
                <div className=" card-footer text-center " >
                    <h4>PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK</h4>
                    <h4>YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI</h4>  
                    <h4>MISI UNTUK MELEGALKAN SLOT</h4>
                </div>
                <div className="card-body bg-dark text-white d-flex ">
                    <div className="container d-flex">
                        <div>
                        <img src= "./public/logo.png" alt= "logo" width="60px"/>
                        </div>
                        <div className="flex-wrap ms-3">
                        <h5 className="card-title  ">DUMBWAYS.ID</h5>
                        <p className="card-text">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-dark text-white text-center" style = {{marginTop:"1px"}}>
                Komisi Pemilihan Umum DumbWays.ID | WirantoPutu 2023
                </div>
            </footer>
        </div>
       
    )
}