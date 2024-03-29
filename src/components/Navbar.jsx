
export const Navbar = ({setCategory}) => {
  return (
    <div >
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
        <div className="container-fluid">
        <img src="./src/assets/logo.png" alt="Bootstrap" width="60" height="40"/>
            <a className="navbar-brand">News Flash</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <div className="nav-link"onClick={()=>setCategory("general")} >Home</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" onClick={()=> setCategory("business")}>Business</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" onClick={()=> setCategory("Entertainment")}>Entertainment</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" onClick={()=> setCategory("health")}>Health</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" onClick={()=> setCategory("science")}>Science</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" onClick={()=> setCategory("sport")}>Sport</div>
                </li>
                
            </ul>

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div> 
        </div>
        </nav>  
</div>
  )
} 

export default Navbar
