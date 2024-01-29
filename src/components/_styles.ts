import styled from 'styled-components'

const Body = styled.div``

const Header = styled.header`

`

const HeaderTitle = styled.h1`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const ContentWrapper = styled.div`
    display: flex;
`

const Navigation = styled.ul`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    list-style: none;
`

const NavWrapper = styled.li`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #1e3786;
    }

    & > a.active {
        text-decoration: underline;
        color: #03eaff;
    }

    & > a:hover {
        color: steelblue; /* Цвет ссылки */
    }
`

const Content = styled.section`
    background-color: #282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`

const Footer = styled.footer`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

export const S = {
    Body,
    Header,
    HeaderTitle,
    ContentWrapper,
    Navigation,
    NavWrapper,
    Content,
    Footer
}