export default function JumboTron () {
    return (
        <div className="container ">
            <div className= "rounded-4 mx-auto" 
                 style = {{width:"1140px", height:"516px",marginTop:"8rem",background: "linear-gradient(to right, #98544c, #5C0303)" }}>
                <div className="d-flex">
                    <div>
                        <img src = "./public/brandred 1.png" className = "img-fluid rounded opacity-25" alt = "brand" 
                            style = {{width:"342px", height:"237px", borderRadius:"50px"}}
                        />
                    <div className = "text-white container" style = {{width:"592px", height:"126px"}}>
                    <div className="fw-bold"style={{marginTop:"100px", fontSize:"64px"}}>SELAMAT DATANG</div>
                    <div className="fw-bold"style={{fontSize:"24px", marginTop:"-20px"}}>PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR </div>
                    <div className="fw-bold"style={{fontSize:"24px", marginTop:"-10px"}}>DIPILIH MELALUI SEBUAH ARTI NAMA</div>
                    </div>
                </div>
                <div>
                    <img src="./public/kpu.png" width="286px" height="473" style={{marginLeft:"130px"}}/>
                </div>
                </div>
            </div>
        </div>
      
    )
} 