import React, { Component } from 'react';
import Recipe from './recipe.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const RecipeList = (props) => {
	//build the recipe array here
	const recipeList = props.recipe.map((recipe, ind) => {    
  		return <Recipe key={ind} ident={ind} ingredients={recipe.ingredients} recipeName={recipe.recipeName}
  		instructions={recipe.instructions} handleRecipe={props.handleRecipe}/>;    
	});
  	
    return  (
    	<div className='panel-group row' id='accordion' role='tablist' aria-multiselectable='true'>
    	<ReactCSSTransitionGroup transitionName="fadein" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
    		{recipeList} 
    	</ReactCSSTransitionGroup>
    	</div>
    	);
};

export default RecipeList;