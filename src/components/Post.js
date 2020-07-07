import React from 'react'
import marked from 'marked'

const Post = ({recipe}) => {
    console.log(recipe)
    const {title, recipeImage, instructions, ingredients} = recipe.fields
    const postInstructions = marked(instructions)
    // const postIngredients = marked(ingredients)
    return (
        
        <div className="container px-lg-5 contentbackground margins rounded">
            <div className="row justify-content-center smallermargins">
                <h2 className="title">{title}</h2>
            </div>
            <div className="row justify-content-center margins">
                {recipeImage && <img className='recipeImage' src={recipeImage.fields.file.url} alt={title} title={title} />}
            </div>            
            <div className="row mx-lg-n5 margins center">
                <ul className="col-3 px-lg-5">{ingredients.map((ingredient) => <li className="ingredients border border-secondary rounded">{ingredient}</li>)}</ul>
                <section className="col-8 px-lg-5 textleft toppad border border-secondary rounded" dangerouslySetInnerHTML={{__html: postInstructions}} />                
            </div>               
        </div>
           
        
    )
}

export default Post
