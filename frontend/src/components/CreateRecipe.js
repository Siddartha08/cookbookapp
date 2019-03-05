import React from 'react';
import '../css/CreateRecipe.css';

import  '../css/CreateRecipe.css';
import NavBar from './NavBar';

class CreateRecipe extends React.Component{
    //Verifying user login?
    render(){
        return(
            <div className='Create-Recipe'>
                <NavBar /> 
                <div className='create-page-container'>
                    <div className='url-add-recipe-section'> 
                        <form className='add-recipe-form'>
                            <div className='url-input-container'>
                                <input 
                                    className='url-drop-input' 
                                    placeholder='  Drag and drop url here'/>
                            </div>        
                            <div className='recipe-preview'>
                                I am the recipe preview
                            </div>   
                            <div className='add-recipe-button'> Save </div> 
                        </form>
                    </div>
                    <div className='recipe-modification-section'>
                        <div className='meal-tag-section'>
                            <h3 className='meal-tag-header'>Click to add meal tag</h3>
                            <div className='meal-tag'>
                                <p className='meal-tag-p'>Breakfast</p>
                                <img className='meal-tag-icon' src = 'https://image.flaticon.com/icons/svg/1590/1590858.svg' alt = 'bacon-icon'/>
                            </div>
                            <div className='meal-tag'>
                                <p className='meal-tag-p'>Lunch</p>
                                <img className='meal-tag-icon' src = 'https://image.flaticon.com/icons/svg/1034/1034648.svg' alt = 'salad-icon'/>
                            </div>
                            <div className='meal-tag'>
                                <p className='meal-tag-p'>Dinner</p>
                                <img className='meal-tag-icon' src = 'https://image.flaticon.com/icons/svg/1005/1005468.svg' alt = 'fish-icon'/>
                            </div>
                            <div className='meal-tag'>
                                <p className='meal-tag-p'>Dessert</p>
                                <img className='meal-tag-icon' src = 'https://image.flaticon.com/icons/svg/1499/1499251.svg' alt = 'cupcake-icon'/>
                            </div>
                            <div className='meal-tag'>
                                <p className='meal-tag-p'>Snack</p>
                                <img className='meal-tag-icon' src = 'https://image.flaticon.com/icons/svg/1005/1005484.svg' alt = 'watermelon-icon'/>
                            </div>
                        </div>
                        <div className='edit-servings-section'>
                            <div>Servings editor</div>
                        </div>
                        <div className='calendar-section'>
                            <div>Date selection placeholder</div>
                            <div>Calendar placeholder</div>
                        </div>
                    </div>
                </div>           
            </div>
        )
    }
}
export default CreateRecipe;