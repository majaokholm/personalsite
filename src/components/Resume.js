import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
              <Grid item xs={12}>
                <hr className="lineSeperator"/>
                <div className="topBox">
                  <h3 className="firstCol">Headline Section</h3>
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
                  <h3 className="firstCol">Headline Section</h3>
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