import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import MainContainer from '../components/MainContainer'

function Users ({ users }) {

    

    return (
        <MainContainer keywords={"users page"} title="Пользователи">
            <h1>Пользователи</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </MainContainer>
    )
}

export default Users


export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    
    return {
        // добавление users в props
        props: {users}, 
    }
}