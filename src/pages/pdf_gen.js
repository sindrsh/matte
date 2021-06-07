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
  chAd3 = (event) => {
    this.setState({ad3: event.target.value});
    window.sessionStorage.setItem("ad3", event.target.value);
  }
  chAd2wc = (event) => {
    this.setState({ad2wc: event.target.value});
    window.sessionStorage.setItem("ad2wc", event.target.value);
  }
  chAd2mix = (event) => {
    this.setState({ad2mix: event.target.value});
    window.sessionStorage.setItem("ad2mix", event.target.value);
  }
  chAd3mix = (event) => {
    this.setState({ad3mix: event.target.value});
    window.sessionStorage.setItem("ad3mix", event.target.value);
  }
  chSub2 = (event) => {
    this.setState({sub2: event.target.value});
    window.sessionStorage.setItem("sub2", event.target.value);
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
        
        <ValInput val={this.state.ad3} ch={this.chAd3} title='Addisjon med 3 siffer, utan tiarovergongar'/>
        
        <ValInput val={this.state.ad2wc} ch={this.chAd2wc} title='Addisjon med 2 siffer, med tiarovergongar'/>
        
        <ValInput val={this.state.ad2mix} ch={this.chAd2mix} title='Addisjon med 2 siffer, blanda'/>
        
        <ValInput val={this.state.ad3mix} ch={this.chAd3mix} title='Addisjon med 3 siffer, blanda'/>
        
        <ValInput val={this.state.sub2} ch={this.chSub2} title='Subtraksjon med to siffer, utan tiarovergongar'/>
        
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

