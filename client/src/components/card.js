
import React, {Component} from 'react'
import Form from './form'
import axios from 'axios';

class Card extends Component{

  

 

render()
{
const {_id, name, phone, mail, link} = this.props.contact

return(


<>
<aside class="profile-card asideCard">
  <div class="mask-shadow"></div>
  <header>

    
  <a href="https://tutsplus.com">
      <img src={link} />
     </a>

    <br></br>
   
  </header>

  
  <div class="profile-bio">

    
    <h5>NAME: {name}</h5> <br/>
    <h5>PHONE: {phone}</h5><br/>
    <h5>E-MAIL: {mail}</h5><br/>

  </div>

  
  <ul class="profile-social-links">

    
    <li>
      <button className="butt-edit" name="edit" > <Form  card={this.props.contact}  handleEdit={this.props.handleEdit} />
       <img src="data:image/png;base64,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" />
      
      </button>  
    </li>

     
    <li>
    <button className="butt-del" name="delete" onClick={()=> this.props.handleDelete(_id, name)} >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLsyVkYCivIqLfj2f69B7Z6URJNn-rp-ffYctk_NxgzTBDIT5C&usqp=CAU" />
      </button>
    </li>


  </ul>

</aside>
</>
)
}
}
export default Card