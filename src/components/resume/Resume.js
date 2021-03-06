import React from 'react';
import Grid from '@material-ui/core/Grid';

import star from './starfilled.png';
import starsad from './starnonfilled.png';

import './Resume.css'

class Resume extends React.Component {
    render() {
      return (
        <div className="contentSpecific">
          <Grid>            
            <div className="row">                      
              
            <Grid item xs={12}>
                <div className="topBox">
                    <h2 className="firstCol">Stuff I pretend to know.</h2>
                    <p className="firstCol">I am a self-taught developer with a strong functional foundation and +3 years IT consulting experience. I have done a little bit of everything, but am an expert of nothing.</p>                   
                </div>
            </Grid>            
            
            <Grid item xs={2}>
                <p className="alignleft">C#/.NET</p>
            </Grid>
            <Grid item xs={4} container justify='flex-end' >
              <div className="horizontalUl">
                <ul>
                  <img src={starsad} alt="fuckup" className="star"/>
                  <img src={star} alt="fuckup" className="star"/>
                  <img src={star} alt="fuckup" className="star"/>
                  <img src={star} alt="fuckup" className="star"/>
                  <img src={star} alt="fuckup" className="star"/>
                </ul>
              </div>
            </Grid>
            <Grid item xs={2}>
                <p className="alignleft">Java</p>
            </Grid>
            <Grid item xs={4} container justify='flex-end'>
                <ul>
                    <img src={starsad} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                </ul>
            </Grid>
            <Grid item xs={2}>
                <p className="alignleft">JavaScript</p>
            </Grid>
            <Grid item xs={4} container justify='flex-end'>
                <ul>
                    <img src={starsad} alt="fuckup" className="star"/>
                    <img src={starsad} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                </ul>
            </Grid>
            <Grid item xs={2}>
                <p className="alignleft">Android</p>
            </Grid>  
            <Grid item xs={4} container justify='flex-end'>
                <ul>
                    <img src={starsad} alt="fuckup" className="star"/>
                    <img src={starsad} alt="fuckup" className="star"/>
                    <img src={starsad} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                    <img src={star} alt="fuckup" className="star"/>
                </ul>
            </Grid>          

            <Grid item xs={12}>
              <hr className="lineSeperator"/>
              <div className="topBox">
                <h3 className="firstCol">Experience</h3>
              </div>
            </Grid>
            <Grid item xs={4}>
              <h5 className="firstCol">Software Developer, Danmarks Statistik</h5>
              <p className="firstCol">2019 -</p>
            </Grid>
            <Grid item xs={8}>
              <p className="secondCol">I work as a full stack .NET developer. I primarily working with .NET CORE and web, including different JavaScript frameworks.</p> 
            </Grid>
            <Grid item xs={4}>
              <h5 className="firstCol">Software Developer, Accenture</h5>
              <p className="firstCol">2017-2019</p>
            </Grid>
            <Grid item xs={8}>
              <p className="secondCol">I primarily worked as a as a Java developer, but I also did some C#/.NET development, as well as a bit of JavaScript (Vue) and a little python. I have developed everything from classical batch applications to mobile (Android).</p> 
            </Grid>
            <Grid item xs={4}>
              <h5 className="firstCol">Technology Consultant, Accenture</h5>
              <p className="firstCol">2015-2017</p>
            </Grid>
            <Grid item xs={8}>
              <p className="secondCol">I worked as a technology consultant in a number of different roles, mainly within the domains of software testing/test management and business analysis.</p> 
            </Grid>
            <Grid item xs={4}>
              <h5 className="firstCol">Junior Project Manager, CSC/DXC</h5>
              <p className="firstCol">2014-2015</p>
            </Grid>
            <Grid item xs={8}>
              <p className="secondCol">I worked on two different transition programs as a junior project manager. My main tasks involved supporting the programme manager as well as project architects.</p> 
            </Grid>

            <Grid item xs={12}>
              <hr className="lineSeperator"/>
              <div className="topBox">
                <h3 className="firstCol">Education</h3>
              </div>
            </Grid>
            <Grid item xs={6}>
              <h5 className="firstCol">Practical Concurrent and Parallel Programming, Course, ITU</h5>
              <p className="firstCol">2018</p>
            </Grid>
            <Grid item xs={6}>
              <p className="secondCol">Single Course about the development of correct and effective concurrent application, primarily taught in Java</p> 
            </Grid>
            <Grid item xs={6}>
              <h5 className="firstCol">Object Oriented Programming, Course, DTU</h5>
              <p className="firstCol">2017</p>
            </Grid>
            <Grid item xs={6}>
              <p className="secondCol">Single course in object-oriented programming taught in C#.</p> 
            </Grid>
            <Grid item xs={6}>
              <h5 className="firstCol">M.Sc. in International Management, CEMS</h5>
              <p className="firstCol">2013-2014</p>
            </Grid>
            <Grid item xs={6}>
              <p className="secondCol">Double degree with core courses taken at Richard Ivey Business School during fall and winter of 2013.</p> 
            </Grid>
            <Grid item xs={6}>
              <h5 className="firstCol">M.Sc. in International Buisness and Politics, CBS</h5>
              <p className="firstCol">2012-2014</p>
            </Grid>
            <Grid item xs={6}>
              <p className="secondCol">Master thesis about Responsible Investments using regressions analysis.</p> 
            </Grid> 
            <Grid item xs={6}>
              <h5 className="firstCol">B.Sc. in International Buisness and Politics, CBS</h5>
              <p className="firstCol">2008-2011</p>
            </Grid>
            <Grid item xs={6}>
              <p className="secondCol">Two self-arranged exchange semesters at University of the West Indies, Kingston, Jamaica.</p> 
            </Grid> 
          </div>           
        </Grid>


        </div>        
      );
    }
}

export default Resume;