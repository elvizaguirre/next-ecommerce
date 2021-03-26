import Layout from '../components/layout';
import { Car, Product } from '../models';
import styles from '../styles/Home.module.css';
import { getOrCreateConnection } from '../util';

export default function Home(props) {
  return (
    <Layout title="ASEDDA">
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! + TypeScript</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
        
          {props.users.map((el: Product) => {
            return (<>
              <a href="#" className={styles.card}>
                <h3>{el.name}&rarr;</h3>
                <p>{el.price}</p>
                <h3>{el.picture} &rarr;</h3>
              </a>
            </>);
          })}
        </div>
      </main>
    </div>
    </Layout>
  )
}

/*
 *<a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a> 
 * 
 */

export async function getServerSideProps() {
  const conn = await getOrCreateConnection();
  const productsRepo = conn.getRepository<Product>("Product");
  const products = await productsRepo.find();

  const localProductMap = products.map((el: Product) => {
    return {
      id: el.id,
      name: el.name,
      price: el.price,
      picture: el.picture
    };
  });
  return {
    props: {
      users: localProductMap
    }
  }
}
