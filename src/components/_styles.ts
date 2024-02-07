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
    font-size: 30px;

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


// ---------------- Adidas -------------
const ImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`


//  ----- Model -----------
const ModelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
`

const ModelHeader = styled.h2`
    text-align: center;
`

const SpanText = styled.span`
    text-align: center;
    font-size: 40px;
    color: aqua;
`

const ModelImg = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
`


export const S = {
    Body,
    Header,
    HeaderTitle,
    ContentWrapper,
    Navigation,
    NavWrapper,
    Content,
    Footer,
    ModelWrapper,
    ModelHeader,
    SpanText,
    ModelImg,
    ImgWrapper,
    Image
}