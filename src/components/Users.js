import {Component} from "react";
import {User} from "./User";
import {userService} from "../services/userService";

class Users extends Component{
    constructor(props) {
        super(props);
        this.state={
            users: [],
            count: 5
        }
    }

    componentDidMount() {
        userService.getAll().then(({data})=>this.setState({users: data}))
    }

    render() {
        return (
            <div>
                <h1>count {this.state.count}</h1>
                {this.state.users.map(user=><User key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {
    Users
}