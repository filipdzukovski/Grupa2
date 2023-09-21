
export const Comments = ({hasComments,longComment}) => {
    return(
        <div id="comments">
            {/* true/false */}
           {hasComments === false ? <h2>Comments</h2>
            : <p>No comments here</p>}
            {longComment === true &&
             <h4>We have a long comment present in this file</h4>}
        </div>
    )
}

// uslov ? ako e tocen : ako e netocen
// uslov && tocen
