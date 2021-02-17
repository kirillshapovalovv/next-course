import {useRouter} from 'next/router'

import MainContainer from '../../components/MainContainer'

import styles from '../../styles/User.module.scss';

export default function User({ user }) {
    // router
    const router = useRouter();

    return (
        <MainContainer keywords={"user page"} title={user.name}>
            <div className={styles.user}>
                <h1>Пользователь с id {router.query.id}</h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
}


export async function getServerSideProps({ params }) { // context
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json();

    return {
      props: {user}, // will be passed to the page component as props
    }
}