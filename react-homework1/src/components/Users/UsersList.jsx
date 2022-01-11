import React, {useState, useEffect, useMemo} from 'react';
import {User} from './User';
import {ApiRequest} from '../../api/api';

export const  InputComponent = ({doTextFilter}) => {
    const [textInput, setTextInput] = useState('');

    const changeText = (e) => {
        setTextInput(e.currentTarget.value);
        doTextFilter(e.currentTarget.value);
    }

    return (
        <input value={textInput} onChange={changeText} type="text"/>
    )
}

const UserLists = (props) => {

    const [users, setUsers] = useState([]);
    const [textFilter, setTextFilter] = useState('');


    useEffect(() => {
        const userFetchInstance = new ApiRequest();
        userFetchInstance.usersFetch().then(setUsers);

    }, []);


    const filterUsers = useMemo(() => {
        let filteredUsers = users.filter(user => {
            if (user.name.includes(textFilter)) {
                return true;
            }

            return false;
        });

        return filteredUsers;

    }, [textFilter, users]);



    return (

        <div>
            <InputComponent doTextFilter={setTextFilter} />

            {filterUsers.map(user => <User idHandler={props.idHandler}
                                     key={user.id}
                                     idUser={user.id}
                                     userName={user.name}
            /> ) }
        </div>
    );
};

export default UserLists;
