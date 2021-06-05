import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"

//import styles from "../components/layout"

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
    	};
	
  }

  chAd2 = (event) => {
    this.setState({ad2: event.target.value});
  }
  
  chAd3 = (event) => {
    this.setState({ad3: event.target.value});
  }
  chAd2wc = (event) => {
    this.setState({ad2wc: event.target.value});
  }
  
  chTitle = (event) => {
    this.setState({title: event.target.value});
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
        
    <button>
	<Link
      to={"/pdf_out/"}
      style={{textDecoration: 'none', display: 'block'}}
      state={{ title: this.state.title, 
      data: [
      this.state.ad2,
      this.state.ad3,
      this.state.ad2wc] }}
    >
    Lag PDF
    </Link>
    </button>
        </div>
    );
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

