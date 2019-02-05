import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from "./component/RecipeList";
import RecipeDetails from "./component/RecipeDetails";

class App extends Component {
  state ={
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=070a1f8e1e7f11fe68e02e5cba987290",
    base_url:"https://www.food2fork.com/api/search?key=070a1f8e1e7f11fe68e02e5cba987290",
    deatils_id:35389,
    pageIndex:1,
    search:'',
    query:'&q=',
    error:''
  };

  // async getRecipes(){

  //   try{
  //   const data= await fetch(this.state.url);
  //   const jsonData = await data.json();
  //     if(jsonData.recipes.length ===0){
  //       this.setState(()=>{
  //       return{error:'sorry,search recipesis not available'}
  //       })
  //     }
  //     else{
  //       this.setState(()=>{
  //        return{ recipes: jsonData.recipes}
  //       })

  //     }
    
  // }
  // catch(e){console.log(e);}
  // }
  // componentDidMount(){
  //   this.getRecipes();
  // }

  displayPage=index=>{
    switch(index){
      default:
      case 1:
        return <RecipeList recipes={this.state.recipes} 
        handleDetails={this.handleDetails}
        value={this.state.search}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}/>
      case 0:
        return (<RecipeDetails id={this.state.deatils_id} 
        handleIndex={this.handleIndex}/>);
    }
  };
handleIndex=index=>{
  this.setState({
    pageIndex:index
  });
}
handleDetails=(index,id)=>{
  this.setState({
    pageIndex:index,
    deatils_id:id
  });
}
handleChange=(e)=>{
    this.setState({
      search:e.target.value
    },()=>{
      console.log(this.state.value);
    })
} 
handleSubmit=(e)=>{
  e.preventDefault();
  const{base_url,query,search}=this.state;
  this.setState(()=>{
    return{url:'${base_url}$(query}${search}',search:""}
  },()=>{
    this.getRecipes();
  })
}
 render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>          
        {this.displayPage(this.state.pageIndex)}
        </React.Fragment>
    );
  }
}

export default App;
