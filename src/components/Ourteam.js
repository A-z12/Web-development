import React from 'react';

const Ourteam = () => {
    return(
        // "owl-carousel owl-theme"
        //className="column grid"
        <div  style={{  height : 600, backgroundColor : 'rgba(236, 162, 25, 0.7)'}}>
            <div class='section-heading' style={{height : '10%'}} >
                        <h2 style={{  color : '#fff', paddingLeft : 120}}>Meet our team</h2>
                        
            </div>
            <div class= "row grid" style={{height : '90%'}}>
                <div style={{backgroundColor : 'rgba(236, 162, 25, 0.7)', width : '33.33%'}}>    
                    <div class="item author-item" style={{marginTop : '10%'}} >
                        <div class="member-thumb">
                            <img   src="assets/images/Abdulla.jpg" style={{ borderRadius : '50%', height : '50%', width : '50%', marginLeft : '25%', border : 'solid'
                            , borderColor : 'white', borderWidth : 8}}  alt=""/>
                            <div class="hover-effect">
                                <div class="hover-content">
                                    <ul>
                                        <li><a href="https://www.facebook.com/cr7k8"><i class="fa fa-facebook" style={{ paddingLeft : '50%'}}></i></a></li>
                                        {/* <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-rss"></i></a></li> */
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h4 style={{ textAlign : 'center', color : '#fff', color:'#eca219', backgroundColor : 'white', width : '40%', marginLeft : '30%' }}>Abdulla Zubair</h4>
                       
                        <h6 style={{ textAlign : 'center',  color : '#fff'}}>Data Analyst</h6>
                        <h6 style={{ textAlign : 'center',  color : '#fff'}}>Web Developer</h6>
                    </div>
                </div>
                <div style={{backgroundColor : 'rgba(236, 162, 25, 0.7)', width : '33.33%'}}>       
                    <div class="item author-item" style={{marginTop : '20%'}}>
                        <div class="member-thumb">
                            <img src="assets/images/Anas.jpg" style={{ borderRadius : '50%', height : '70%', width : '70%',  marginLeft : '15%', border : 'solid', borderColor : 'white', borderWidth : 8}} alt=""/>
                            <div class="hover-effect">
                                <div class="hover-content">
                                    <ul>
                                        {/* <li><a href="https://www.facebook.com/Emkore"><i class="fa fa-facebook"></i></a></li> */}
                                        {/* <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-rss"></i></a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://www.facebook.com/Emkore"  ><i class="fa fa-facebook" style={{paddingLeft : '50%'}}></i></a>
                        <h4 style={{ textAlign : 'center', color : '#eca219', backgroundColor : 'white', width : '40%', marginLeft : '30%'}}>Anas Mahmood</h4>
                        <h6 style={{ textAlign : 'center', color : '#fff'}}>Web Developer</h6>
                    </div>
                  </div>  
                  <div style={{ backgroundColor : 'rgba(236, 162, 25, 0.7)', width : '33.33%'}} >  
                    <div class="item author-item" style={{marginTop : '10%'}}>
                        <div class="member-thumb">
                            <img src="assets/images/Sheikh.jpg" style={{ borderRadius : '50%', height : '50%', width : '50%', marginLeft : '25%', border : 'solid', borderColor : 'white', borderWidth : 8}} alt=""/>
                            <div class="hover-effect">
                                <div class="hover-content">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook" style={{paddingLeft : '50%'}}></i></a></li>
                                        {/* <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-rss"></i></a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h4 style={{ textAlign : 'center', color : '#eca219', backgroundColor : 'white', width : '40%', marginLeft : '30%'}}>Abdullah Sheikh</h4>
                        <h6 style={{ textAlign : 'center', color : '#fff'}}>Web Developer</h6>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default Ourteam;