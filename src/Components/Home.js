import React from 'react'

export default function Home() {
    return (
       <div data-spy="scroll" data-target="#navbar-example" data-offset="0">
           
               <div className="container">
                     
                    <div id="home" class="row justify-content-center">
                        <div class="col-sm-8 align-items-center" > 

                            <div className="row d-flex align-content-center justify-content-center ">
                                   
                                 <h1 className="text-center">Amazing App for Reporting Emergency</h1>
                                <p> Faced with an emergency situation, whether fire, health wise
                                    or in an armed robbery case, report emergency 
                                    app got you covered</p>
                                    <button> Download App</button> 
                                    
                            </div>
                       
                        </div>


                        <div class="col-sm-4">
                            <img src="./images/report-splash.svg" alt="" />
                        </div>
                    </div>
                    {/* this is the end of home */}

                    {/* this is the begining of features */}

                    <div id="features" class="column">
                        
                        <div class="column d-flex align-items-center justify-content-center"  > 
                            <div className="col align-self-start">
                                <h1 className="text-center"> Alert a Family Member when in Distress</h1>
                                <p className="text-center">This feature enables you to register the details of a Close
                                     Relative in case of an emergency.
                                     A call is placed directly to the registered number to 
                                     inform the person of your current situation and location.</p>
                               
                                
                            </div>
                       
                        </div>

                        <div class="col">
                            <img src="./images/SingleIphone.png" alt="" className="img-responsive" />
                        </div>
                        
                    </div>
                    {/* this is the end of features */}

                    {/* this is the begining of FAQs */}

                    <div id="FAQs" class="column">
                        
                        <div class="col" > 
                            <div className="justify-content-center align-content-center">
                                <h1>Amazing App for Reporting Emergency</h1>
                                <p> Faced with an emergency situation, whether fire, health wise
                                or in an armed robbery case, report emergency 
                                app got you covered</p>
                                <button> Download App</button> 
                                
                            </div>
                       
                        </div>

                        <div class="col">
                            <img src="./images/SingleIphone.svg" alt="" />
                        </div>
                        
                    </div>
                    {/* this is the end of FAQs */}

                    {/* this is the begining of Download App */}

                    <div id="download" class="column">
                        
                        <div class="col" > 
                            <div className="justify-content-center align-content-center">
                                <h1>Amazing App for Reporting Emergency</h1>
                                <p> Faced with an emergency situation, whether fire, health wise
                                or in an armed robbery case, report emergency 
                                app got you covered</p>
                                <button> Download App</button> 
                                
                            </div>
                       
                        </div>

                        <div class="col">
                            <img src="./images/SingleIphone.svg" alt="" />
                        </div>
                        
                    </div>
                    
                    {/* the end of download app */}
                   
                  
               </div>
          
        </div>
    )
}
