
function LikeButton() {
    return(
        <form action="/tweet/{ tweet.id}/like" method="post">
             {/* <% if(tweet.likes.includes(locals.user.id)){} */}
            <button className="likes" type="submit">
                <img src="../img/icons/like-active.svg" alt="like-active" />
            </button>
            <p className="my-0 mx-2 d-inline redColor">{ tweet.likes.length }</p>
            {/* <%}else{} */}
            <button className="likes" type="submit">
                <img src="../img/icons/like.svg" alt="like" />
            </button>
            <p className="my-0 mx-2 d-inline">{ tweet.likes.length }</p>
                    {/* <%}}            */}
        </form>
    )
}

export default LikeButton;