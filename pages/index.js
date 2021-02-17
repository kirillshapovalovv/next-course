import Link from 'next/link'
import Head from 'next/head'

import A from '../components/A'
import MainContainer from '../components/MainContainer'



const Index = () => {
    return (
        <MainContainer keywords={"main page"} title="Главная страница">
            <div>
                <h1>Main page</h1>
            </div>
        </MainContainer>
    )
}

export default Index
