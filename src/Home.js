import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = ( ) => {

    return (
<>

<section id="header" className="d-flex align-items-center">
<div className="container-fluid nav_bg">
    <div className='row'>
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">

<h1>Grow your business with <strong className="brand-name">Koder</strong> </h1>
<br/>
<h5 >
    We are the team of developer making website application 
</h5>
<br/>
<div className="col-lg-6" >

<NavLink to="/services " className="btn-get-started"> Get Started
</NavLink>
</div>



</div>


<div className="img1 col-lg-6 order-1 order-lg-2 header-img">
<img src="https://miro.medium.com/max/1668/0*7_vzyaWL6DPPoKZY.png" className="img-fluid animated" alt="pic 1"/>





</div>


</div>
</div>
</div>
</div>




</section>

<section className= "container-fluid col-10 mx-auto">


 
<iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14480.246449206188!2d67.331444!3d24.8617452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x781edd27fb714262!2sQuaid-e-Azam%20Park!5e0!3m2!1sen!2s!4v1632225357162!5m2!1sen!2s" width="100%" height="450"></iframe>



</section>
</>

    );
}
export default Home;