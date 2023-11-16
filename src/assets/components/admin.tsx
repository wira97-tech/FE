
export default function Admin() {
  return (
    <div>
        <div style= {{marginTop:"8rem", marginBottom:"8rem"}}>
            <h1 className="mx-auto text-center fw-bold text-success mb-5">DASHBOARD</h1>
        </div>
        <div className="container ">
        <div className="row justify-content-center ms-4" style= {{}}>
            <div className="col">
                <div className="card bg-primary shadow p-3">
                    <img src="./public/paslon.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-text text-white fw-bold">ANAS</h1>
                        <h6>Akumulasi :45%</h6> 
                        <h6>Jumlah Vote : 117 Voters</h6>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card bg-warning shadow p-3">
                    <img src="./public/paslon.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-text text-white fw-bold">BOWO</h1>
                        <h6>Akumulasi :75%</h6> 
                        <h6>Jumlah Vote : 300 Voters</h6>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card bg-danger shadow p-3">
                    <img src="./public/paslon.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-text text-white fw-bold">GANJIR</h1>
                        <h6>Akumulasi :45%</h6> 
                        <h6>Jumlah Vote : 117 Voters</h6>
                    </div>
                </div>
            </div>
            <div className="container">
            <div style= {{marginTop:"8rem", marginBottom:"5rem"}}>
                <h1 className="mx-auto text-center fw-bold text-success mb-5">LIST VOTER</h1>
            </div>
            <div className="table-responsive mb-2">
                <table className="table table-striped">
    ...              <thead>
                        <tr>
                        <th>No</th>
                        <th>NAMA</th>
                        <th>ALAMAT</th>
                        <th>JENIS KELAMIN</th>
                        <th>PASLON</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Sugeng No Pants</td>
                        <td>Cileungsi</td>
                        <td>Laki Laki</td>
                        <td>Ganjir</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Haris Gams</td>
                        <td>Serang</td>
                        <td>Perempuan</td>
                        <td>Anas</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >Aziz Union</td>
                        <td>Bekasi</td>
                        <td>Laki Laki</td>
                        <td>Bowo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="fw-bold mb-5">
                <p>TOTAL SUARA TERKUMPUL : 1000 Voters</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
