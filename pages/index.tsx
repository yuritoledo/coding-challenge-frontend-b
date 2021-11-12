import Head from 'next/head'
import styled from 'styled-components'
import LoadingBus from '../components/LoadingBus'
import SearchBox from '../components/SearchBox'
import { useDestination } from '../hooks/useDestination'

import { Departure } from '../interfaces'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const List = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
  const { list, isFetching } = useDestination()

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBox />
      <List>
        {isFetching ? (
          <LoadingBus />
        ) : (
          list.map(item => (
            <div key={item.id}>
              <p>Depature: {item.departure_time}</p>
              <p>Arrival: {item.arrival_time}</p>
              {/* <p>LocationName: {item.loc}</p> */}
              <p>Price: {item.prices.total}</p>
            </div>
          ))
        )}
      </List>
    </Container>
  )
}

export default Home
