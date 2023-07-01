import Card from 'react-bootstrap/Card';

function Carddetails({cards}) {
  return (
    
        cards.map((sCard)=>{
            return(
                <Card className='Card-Deatils' style={{ width: '18rem' }}>
                    <Card.Body style={{padding : "5px", position : 'relative'}}>
                        <h2>{sCard.name}</h2>
                        <span id='icon'>{sCard.card_type!="burner" ?  <i class='bx bx-repeat' style={{color:'crimson'}} ></i>
                            : <i class='bx bxs-hot' style={{color: 'rgba(239,172,30,0.79)'}} ></i>}  
                                </span>
                        <Card.Subtitle className="sub">{sCard.budget_name}</Card.Subtitle>
                        <div className='card-value'>
                            <div>
                                <span>AMOUNT</span>
                                <h5>{sCard.available_to_spend.value} {sCard.available_to_spend.currency}</h5>
                            </div>
                            <div>
                                <span>FREQUENCY</span>
                                <h5>Monthly</h5>
                            </div>
                            <div>
                                <span>EXPIRY</span>
                                <h5>{sCard.expiry}</h5>
                            </div>
                        </div>
                        <div className='balance'>
                            <span><i class='bx bxs-circle' style={{ color:'#60ff0b'}}></i>Spent</span>
                            <span>{sCard.spent.value} {sCard.spent.currency}</span>
                        </div>
                        <div className='balance'>
                            <span><i class='bx bxs-circle' style={{color:'#f5151a'}}  ></i>Balance</span>
                            <span>{sCard.available_to_spend.value} {sCard.available_to_spend.currency}</span>
                        </div>
                    </Card.Body>
                </Card>
            )
        })
    
  );
}

export default Carddetails;