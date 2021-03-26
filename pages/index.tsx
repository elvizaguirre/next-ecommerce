import Head from 'next/head'
import { Header } from '../components/header';
import { Car, User } from '../models';
import styles from '../styles/Home.module.css'
import { getOrCreateConnection } from '../util';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! + TypeScript</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <div className={styles.grid}>
          {props.users.map((el: User, index) => {
            return (<>
              <a key={'a'+index} className={styles.card}>
                <h3 key={'h3'+index}>{el.name} &rarr;</h3>
                <p key={'p'+index}>{el.lastName}</p>
              </a>
            </>)
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const conn = await getOrCreateConnection();
  const userRepo = conn.getRepository<User>("User");
  const carRepo = conn.getRepository<Car>("Car");
  const localUsers = await userRepo.find();
  const localCars = await carRepo.find();
  console.log(`${localUsers.length} users fetched from the database`);
  console.log(`${localCars.length} cars fetched from the database`);

  const localUserMap = localUsers.map((el: User) => {
    return {
      id: el.id,
      name: el.name,
      lastName: el.lastName
    };
  });
  return {
    props: {
      users: localUserMap
    }
  }
}
