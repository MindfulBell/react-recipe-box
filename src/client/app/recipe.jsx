import React, { Component } from 'react';

const Recipe = (props) => {
	const ingredientArr = props.ingredients.map((ingredient, ind)=>{
		return <li key={ind}>{ingredient}</li>;
	});
	//unique values for the accordion table
	const recipeId = props.ident;
	const hashedId = `#${recipeId}`;
	return (
    <div className='panel panel-default'>
    	<div className='panel-heading' role='tab' id='headingOne'>
    		<h4 className='panel-title'>
    			<a role='button' data-toggle='collapse' 
    			data-parent='#accordion' 
    			href={hashedId} 
    			aria-expanded='true'
    			aria-controls={recipeId}>
    				{props.recipeName}
    			</a>
    		</h4>
    	</div>
    	<div id={recipeId} 
    	className='panel-collapse collapse'
    	role='tabpanel' 
    	aria-labelledby={recipeId}>
		    <div className='panel-body'>
		    	<h4>Ingredients</h4>
		    	<ol>
		    		{ingredientArr}
		    	</ol>
		    	<h4>Instructions</h4>
			    <p>
			    	{props.instructions}
			    </p>
			    <button type='delete' id='delButton' 
			    className='hvr-sweep-to-right btn btn-danger'
			    onClick={event => props.handleRecipe(event.target.parentNode.parentNode.id, event.target.id)}>
			    Delete
			    </button>
			    <button onClick={event => props.handleRecipe(event.target.parentNode.parentNode.id, event.target.id)} 
			    type='edit' 
			    id='editButton' 
			    className='hvr-sweep-to-right btn' 
			    data-toggle='modal' 
			    data-target='#addPopUp'>
			    Edit
			    </button>
		    </div>
    	</div>
    </div>
    );
};

export default Recipe;
