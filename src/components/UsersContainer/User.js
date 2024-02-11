import css from "./User.module.css"
const User = ({user}) => {
    const {name,username,email, address,phone,website,company} = user;
    const {street,suite,city,zipcode,geo} = address;
    const {lat,lng} = geo;
    const {name:nameCompany,catchPhrase,bs} = company;

    return (
        <div className={css.user}>
            <ul className={css.ul}>
                <li>name: {name}</li>
                <li>username: {username}</li>
                <li>email: {email}</li>
                <li>address:
                    <ul className={css.ul}>
                        <li>street: {street}</li>
                        <li>suite: {suite}</li>
                        <li>city: {city}</li>
                        <li>zipcode: {zipcode}</li>
                        <li>geo:
                            <ul className={css.ul}>
                                <li>lat: {lat}</li>
                                <li>lng: {lng}</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>phone: {phone}</li>
                <li>website: {website}</li>
                <li>company:
                    <ul  className={css.ul}>
                        <li>nameCompany: {nameCompany}</li>
                        <li>catchPhrase: {catchPhrase}</li>
                        <li>bs: {bs}</li>
                    </ul>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export {User};