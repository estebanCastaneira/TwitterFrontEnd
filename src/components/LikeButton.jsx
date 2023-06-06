
function LikeButton() {
    const handleSubmit = (e)=> {
        e.preventDefault();

    }
    return(
        <form method="POST" onSubmit={handleSubmit}>
            <button className="likes" type="submit">
                <i className="redColor bi bi-heart-fill"></i>
                <p className="my-0 mx-2 d-inline redColor">Tweets likes length</p>
                <i className="bi bi-heart"></i>
                <p className="my-0 mx-2 d-inline">Tweets likes length</p>
            </button>
           
           
        </form>
    )
}

export default LikeButton;