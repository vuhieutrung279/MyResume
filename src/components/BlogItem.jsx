import React from 'react'
import { Link } from "react-router-dom";
function BlogItem(props) {
    const { imageBlog, title, shortDesc, id } = props;

    const changeToSlug = (str) => {
        str = str.toLowerCase();

        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        str = str.replace(/([^0-9a-z-\s])/g, '');

        str = str.replace(/(\s+)/g, '-');

        str = str.replace(/^-+/g, '');

        str = str.replace(/-+$/g, '');

        return str;
    }
    return (
        <Link className="blog__item card" to={"/blog/" + id + "/" + changeToSlug(title) + ".html"}>
            <img className="card-img-top" src={imageBlog} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{shortDesc}</p>
                {/* <p className="card-text" dangerouslySetInnerHTML={{__html: content}} ></p> */}
                <span className="blog__btn--more">Read More</span>
            </div>
        </Link>
    )
}

export default BlogItem
