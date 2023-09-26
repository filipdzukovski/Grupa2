import PropTypes from 'prop-types';

export const Comments = ({listOfComments,datum}) => {
    console.log(listOfComments);
    console.log(datum)
    return(
        <div id="comments">
            {listOfComments.map(comment=>{
                return(
                    <div key={comment.id}>
                    {comment.author === "Filip" ? <h3>Author: {comment.author}</h3> : <p>No Author Known</p>}
                    <p style={{color: comment.author === "Simona" ? 'blue' : ""}}>Comment: {comment.content}</p>
                    <p>{datum}</p>
                    </div>    
                )
            })}
        </div>
    )
}

Comments.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object),
    datum: PropTypes.string.isRequired
}