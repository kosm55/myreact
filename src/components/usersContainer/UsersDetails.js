import {Outlet, useNavigate} from "react-router-dom";

const UsersDetails = ({userDetails}) => {
    const {id, name, username,email,address,phone,website,company} = userDetails;
    const {street,suite,city,zipcode} = address;
    const {name: companyName, catchPhrase,bs} = company;

    const navigate = useNavigate();


    return (
        <div>

            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address:
                <ul>
                    <li>street: {street}</li>
                    <li>suite: {suite}</li>
                    <li>city: {city}</li>
                    <li>zipcode: {zipcode}</li>
                </ul>
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company:
                <ul>
                    <li>companyName: {companyName}</li>
                    <li>catchPhrase: {catchPhrase}</li>
                    <li>bs: {bs}</li>
                </ul>
            </div>
            <button onClick={()=>navigate('posts', {state: {userDetails}})}>post of current user</button>
            <hr/>
            <Outlet/>

        </div>
    );
};

export {UsersDetails};