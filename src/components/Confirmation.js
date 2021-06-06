import {AppBar, Button, Typography, Checkbox} from '@material-ui/core';


function Confirmation(){

    const money={

        unutibal:9.50,
        entry:0.0,
        bal:0.0,
        win:0.0,
        bonus:0.0
    };
     
    const box={
  
      margin:'auto',
      width:'500px',
      border:'0.5px solid #bdbdbd',
      padding:'10px'      
  
    };

    const rightSide={

        textAlign:'right',
        marginRight:'10px'
    };

    return(
        <div>
            <div style={box}>
                <div style={{margin:'10px'}}>
                    <AppBar color='secondary' style={{position:'relative'}}>
                        <Typography variant='h4'>
                        Confirmation
                        </Typography>
                    </AppBar>

                    <div style={{ margin:'20px', borderBottom:'0.5px solid #bdbdbd', textAlign:'left'}}>
                            <Typography variant='body1'>Unutilized Balance + Winnings = 
                                <span style={rightSide}> ₹{money.unutibal+money.win}</span>
                            </Typography>
                    </div>

                    <div style={{margin:'20px', borderBottom:'0.1px solid #bdbdbd', textAlign:'left'}}>
                        <Typography variant='body1'>Entry
                            <span style={rightSide}>  ₹{money.entry}</span>
                        </Typography>
                        
                        <Typography variant='body1'>Usable Cash Bonus 
                            <span style={rightSide}> ₹{money.bonus}</span>
                        </Typography>         
                    </div>

                    <div style={{margin:'20px', textAlign:'left'}}>
                        <Typography variant='body1'>Bonus
                            <span style={rightSide}> ₹{money.bonus}</span>
                        </Typography>
                        <Typography variant='body1'>Balance
                            <span style={rightSide}> ₹{money.bal}</span>
                        </Typography>
                        <Typography variant='body1'>Winning
                            <span style={rightSide}> ₹{money.win}</span>
                        </Typography>
                        <Typography variant='body1'>To Pay
                            <label style={rightSide}> ₹{money.entry}</label>
                        </Typography>
                    </div>
                    
                    
                    <div style={{textAlign:'left',margin:'10px'}}>
                        <label>
                            <Checkbox></Checkbox>
                        
                             By continuing you accept Khelgully T&C and confirm that you are above
                             18 & not the resident of Assam, Odisha, Andhra Pradesh,
                             Telengana,TamilNadu or sikkim
                        </label>
                    </div>

                    <Button variant='contained' color='secondary' style={{marginTop:'20px'}} >
                        JOIN CONTEST
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;