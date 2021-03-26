import Link from 'next/link';
import styles from  '../styles/Header.module.css';
import { signIn, signOut, useSession } from 'next-auth/client'

export const Header = (props) => {
    const user = props.user || {};
    //const [ session, loading ] = useSession()
console.log(props);
    return (
      <>
      <div className={styles.headerGlobal}>
             <img src="/banner.png" alt="CafeXYZ" style={{width: '100%', height:"min-content"}}/>
      </div>
      <div className={styles.header}>
      {!props.noNav? ( <>
        <div className={styles.logoNav}>
          <ul className={styles.navOptions}>
            <li className={styles.option}>
              <Link href={'/'}>
                <a className={"nav-link"}>Home</a>
              </Link>
            </li>
            <li className={styles.option}>
              <Link href={'/mycart'}>
                <a className={"nav-link"}>My Cart</a>
              </Link>
            </li>
            <li className={styles.option}>
              <Link href={'/orders'}>
                  <a className={"nav-link"}>My Orders</a>
              </Link>
            </li>
            <li className={styles.option +' ' + styles.mobileOption}>
              <Link href={'/login'}>
                  <a className={"nav-link"}>SIGN-IN</a>
              </Link>
            </li>
            <li className={styles.option +' ' + styles.mobileOption}>
              <Link href={'/register'}>
                  <a className={"nav-link " + styles.signUp}>SIGN-UP</a>
              </Link>
            </li>
          </ul>
        </div>
        {user.name ? (
          <>
          <p>Welcome {user.name? user.name + ' ' + user.lastName : user.email } </p>
          <ul className="signin-up">
            <li /* onClick={()=>{ authenticationService.logout()}} */ >
              <Link href={'/'}>
                <a className="nav-link signupBtn">Logout</a>
              </Link>
            </li>
          </ul>
          </>
          ):(
          <>
          <p>You are not logued in!</p>
          <ul className={styles.signinUp}>
            <li className={styles.signIn}>
                <a className={"nav-link"} onClick={() =>{signIn()}}>SIGN-IN</a>
            </li>
            <li>
              <Link href={'/register'}>
                <a className={"nav-link "+styles.signupBtn}>SIGN-UP</a>
              </Link>
            </li>
          </ul>
          </>)
        }
      </>) : null }
      </div>
      </>
    );
  };