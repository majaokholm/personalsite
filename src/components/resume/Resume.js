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
                    <h2 className="firstCol">Headline Overall</h2>
                    <p className="firstCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p>                   
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
                <h3 className="firstCol">Expirence</h3>
              </div>
            </Grid>
            <Grid item xs={3}>
              <h4 className="firstCol">Headline 1</h4>
              <p className="firstCol">periode</p>
            </Grid>
            <Grid item xs={9}>
              <p className="secondCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p> 
            </Grid>
            <Grid item xs={3}>
              <h4 className="firstCol">Headline 2</h4>
              <p className="firstCol">periode</p>
            </Grid>
            <Grid item xs={9}>
              <p className="secondCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p> 
            </Grid>
            <Grid item xs={3}>
              <h4 className="firstCol">Headline 3</h4>
              <p className="firstCol">periode</p>
            </Grid>
            <Grid item xs={9}>
              <p className="secondCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p> 
            </Grid>
            <Grid item xs={3}>
              <h4 className="firstCol">Headline 4</h4>
              <p className="firstCol">periode</p>
            </Grid>
            <Grid item xs={9}>
              <p className="secondCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p> 
            </Grid>
            <Grid item xs={12}>
              <hr className="lineSeperator"/>
              <div className="topBox">
                <h3 className="firstCol">Education</h3>
              </div>
            </Grid>
            <Grid item xs={3}>
              <h4 className="firstCol">Headline 1</h4>
              <p className="firstCol">periode</p>
            </Grid>
            <Grid item xs={9}>
              <p className="secondCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p> 
            </Grid>
            <Grid item xs={3}>
              <h4 className="firstCol">Headline 2</h4>
              <p className="firstCol">periode</p>
            </Grid>
            <Grid item xs={9}>
              <p className="secondCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p> 
            </Grid>
            <Grid item xs={3}>
              <h4 className="firstCol">Headline 3</h4>
              <p className="firstCol">periode</p>
            </Grid>
            <Grid item xs={9}>
              <p className="secondCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p> 
            </Grid>
            <Grid item xs={3}>
              <h4 className="firstCol">Headline 4</h4>
              <p className="firstCol">periode</p>
            </Grid>
            <Grid item xs={9}>
              <p className="secondCol">Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu.</p> 
            </Grid> 
          </div>           
        </Grid>


        </div>        
      );
    }
}

export default Resume;