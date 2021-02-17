import Link from 'next/link'
import Head from 'next/head'

import A from './A'

function MainContainer({ children, keywords, title }) {
    return (
        <>
            <Head>
                <meta keyword={"next, next js, kirill shapovalov, " + keywords} />
                <title>{title}</title>
            </Head>

            <div className="navbar">
                <A href={'/'} text={"Главная"} />
                <A href={'/users'} text={"Пользователи"} />
            </div>

            <div>
                {children}
            </div>

            <style jsx>
                {`
                    .navbar {
                        background: #ffcc01;
                        padding: 20px;
                    }
                `}
            </style>
        </>
    )
}

export default MainContainer
