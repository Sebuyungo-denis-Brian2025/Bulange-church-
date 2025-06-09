import React from 'react';
//import '../Pages/App.css';

function Header() {
  return ( 
    
    <header className="bg-masthead">
      <div className="container px-lg-20  mt-5 ">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 align-self-end">  
                        <h1 className="text-white  mt-5 fw-light fst-italic">Welcome to</h1>
                        </div>
                   </div>
                        </div>
          <hr className="divider divider-light  width-50"/>
            <div className="container px-lg-10  ">
              <div className="row">
                    <div className="col">
                        <div className="text-white fw-light fs-1 text mt-2"><h1>St Reachel Church Of Uganda Bulange</h1></div>
                   </div>
</div>
           <div className="row">
                    <div className="col">
                        <div className="text-white fw-light fs-1 text mt-2 fst-italic"><h3>"Tusookere ku bya Mukama"</h3></div>
                   </div>
</div>
                        <br/>
                        <a className="btn btn-primary btn-xl " href="#about">Join us now</a>
                        <a className="btn btn-primary btn-xl " href="#about">Donate now</a>
                    </div>
                    </header>

  )
}

export default Header