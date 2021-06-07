import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"

const ValInput = (props) => 
	<form >
		   <label>
		      <input maxlength='1' size='1' type="text" value={props.val} onChange={props.ch} />
		     &nbsp; {props.title}
		    </label>
		    </form>

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	title: null,
    	ad2: null,
    	ad3: null,
    	ad2wc: null,
    	ad2mix: null,
    	ad3mix: null,
    	sub2: null,
    	};
  }

  chTitle = (event) => {
  	this.setState({title: event.target.value});
  	window.sessionStorage.setItem("title", event.target.value);
  }
  chAd2 = (event) => {
    this.setState({ad2: event.target.value});
    window.sessionStorage.setItem("ad2", event.target.value);
  }
  
  render() {
    return (
    <div>
    
     <form >
        <label>
        Titel &nbsp;
          <input type="text" value={this.state.title} onChange={this.chTitle} />
        </label>
        </form>
    
        <ValInput val={this.state.ad2} ch={this.chAd2} title='Addisjon med 2 siffer, utan tiarovergongar'/>
        
        
    <button>
	<Link
      to={"/pdf_out/"}
      style={{textDecoration: 'none', display: 'block'}}>
    Lag PDF
    </Link>
    </button>
        </div>
    );
  }
  componentDidMount(){
  	window.sessionStorage.clear();
  }
}

const vids = () => (
		<Layout>
		<NameForm/>
		<div>
		</div>
		 </Layout>
)

export default vids


/* 

//MathML
  <div>     
       <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
     <mi>E</mi>
     <mo>=</mo>
     <mi>m</mi>
     <msup>
       <mi>c</mi>
      <mn>2</mn>
     </msup>
   </math> 
  </div>
  
// Checkbox
<FormGroup row>
		  <FormControlLabel
		    control={<Checkbox checked={this.state.checked} 			onChange={this.handleChAd} name="checkedA" />}
		    label="Addisjon utan tiarovergong"
      	/>
      	</FormGroup>  
      	
// Form
<form >
        <label>
          <input maxlength='1' size='1' type="text" value={this.state.valAd} onChange={this.chAd2} />
         &nbsp; Addisjon utan tiarovergongar
        </label>
        </form>      	
    
*/

