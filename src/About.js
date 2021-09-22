import React from 'react';
import { NavLink } from 'react-router-dom';

const About = ( ) => {

    return (
<>

<section id="header" className="d-flex align-items-center">
<div className="container-fluid ">
    <div className='row'>
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">

<h1>Welcome to About Page <br/><strong className="brand-name">Koder</strong> </h1>

<br/>
<h5 className="my-3">
    We are the team of developer making website application 
</h5>
<div className="mt-3" >

<br/>
<NavLink to="/services " className="btn-get-started"> Contact Now
</NavLink>
</div>



</div>


<div className="img2 col-lg-3 order-1 order-lg-4 header-img">
<img src="https://gray-kwch-prod.cdn.arcpublishing.com/resizer/34XlWhykDU7BCwTdMhjoyUhKcIY=/980x0/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/5A4FDMHJQVDCDDCUUUMVFQEZT4.png" className="img-fluid1 img-thumbnail " alt="pic 1"/>




</div>
</div>
</div>
</div>
</div>

</section>

</>

    );
}
export default About;