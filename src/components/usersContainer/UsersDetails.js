import {useNavigate} from "react-router-dom";

import css from "./UsersDetails.module.css"

const UsersDetails = ({userDetails}) => {
    const {id, name, username,email,address,phone,website,company} = userDetails;
    const {street,suite,city,zipcode} = address;
    const {name: companyName, catchPhrase,bs} = company;

    const navigate = useNavigate();


    return (
        <div className={css.userDetails}>

            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address:
                <ul className={css.ul}>
                    <li>street: {street}</li>
                    <li>suite: {suite}</li>
                    <li>city: {city}</li>
                    <li>zipcode: {zipcode}</li>
                </ul>
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company:
                <ul className={css.ul}>
                    <li>companyName: {companyName}</li>
                    <li>catchPhrase: {catchPhrase}</li>
                    <li>bs: {bs}</li>
                </ul>
            </div>
            <button className={css.button} onClick={()=>navigate('posts', {state: {id}})}>post of current user</button>
        </div>
    );
};

export {UsersDetails};