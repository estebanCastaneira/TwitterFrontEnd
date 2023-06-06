
function DeleteTweet() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
            <button className="delete">
                <i className="redColor bi bi-trash-fill"></i>
            </button>
            </form>
        </div>
    )
}

export default DeleteTweet;