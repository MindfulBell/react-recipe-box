import React, { Component } from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap';
import RecipeList from './recipe-list.jsx';
import AddBox from './addbox.jsx';
require("!style!css!sass!../public/css/style.scss");

//What this app showcases: play with local storage, lifecycle

//NEXT: EDITING a recipe
//1. Maybe move the Addbox to render with Recipe? So confused...

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
            recipes: [],
            recipeToEdit: {}
		};
	}

    componentWillMount() {
        if (localStorage.length === 0) {            
            localStorage.setItem('recipes', JSON.stringify([{
                recipeName: 'Pickled Onions', 
                ingredients: ['Red onions', 'Red wine vinegar', 'Salt', 'Pepper'], 
                instructions: 'Combine half cup of red wine vinegar with half cup of water \
            add salt and pepper to taste, add a thinly sliced red onion. Let sit for at least 30 minutes'}]));            
        }
        this.setState({
            recipes: JSON.parse(localStorage.getItem('recipes'))
        })              
    }

    handleRecipe(ind, btnType, name, ingredients, instructions) {
        const recipeArr = JSON.parse(localStorage.getItem('recipes'));
        if (btnType === 'addButton') {      
            recipeArr.push({
                recipeName: name,
                ingredients: ingredients,
                instructions: instructions
            });                    
        }
        else if (btnType === 'delButton') {
            recipeArr.splice(ind, 1)
        }
        else {       
            this.setState({
                recipeToEdit: recipeArr[ind]
            })
        }
        localStorage.setItem('recipes', JSON.stringify(recipeArr)); 
        this.setState({
            recipes: JSON.parse(localStorage.getItem('recipes'))
        })
        //isnt it re-rendering here when i setState, so shouldn't the list of recipes
        //re-render also down the component chain reflecting the deleted recipe?        
    }
    
    render () {
        return (
        <div>
            <div className='recipe-box container container-fluid'>
              <h1>Personal Recipe Box</h1>
                <RecipeList recipe={this.state.recipes} handleRecipe={this.handleRecipe.bind(this)} />        
            </div>
            <div className='text-center'>
                <button id='addRecipe' type='button' className='hvr-float-shadow btn btn-default btn-primary' 
                data-toggle='modal' data-target='#addPopUp'>Add Recipe</button> 
            </div>
            <AddBox handleRecipe={this.handleRecipe.bind(this)} recipeToEdit={this.state.recipeToEdit} />           
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
