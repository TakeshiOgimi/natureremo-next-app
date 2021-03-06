import Head from 'next/head'
import Image from 'next/image'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`

const TitleAnchor = styled(Anchor)`
  color: #0070f3;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterAncor = styled(Anchor)`
  display: flex;
  justify-content: center;
  align-items: center;
`

// next/image コンポーネントを継承
const FooterImage = styled(Image)`
  margin-left: 0.5rem;
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;
`

const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  > h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  
  > p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

const CardAnckor = styled(Anchor)`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

export const Home = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to <TitleAnchor href="https://nextjs.org">Next.js!</TitleAnchor>
        </Title>

        <Description>
          Get started by editing <Code>pages/app.tsx</Code>
        </Description>

        <Grid>
          <CardAnckor href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </CardAnckor>

          <CardAnckor href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </CardAnckor>

          <CardAnckor href="https://github.com/vercel/next.js/tree/master/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </CardAnckor>

          <CardAnckor
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </CardAnckor>
        </Grid>
      </Main>

      <Footer>
        <FooterAncor
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <FooterImage src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
        </FooterAncor>
      </Footer>
    </Container>
  </>
)

export default Home
