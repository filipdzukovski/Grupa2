import PropTypes from 'prop-types';

export const PostsComponent = ({listOfPosts,error}) => {

    return(
        <div id="posts-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>PostID</th>
                        <th>Author</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfPosts.map(post=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.author}</td>
                                <td>{post.post}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {error && <h3>{error}</h3>}
        </div>
    )
}

PostsComponent.propTypes = {
    listOfPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
}