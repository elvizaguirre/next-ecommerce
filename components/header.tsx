import Link from 'next/link';
import styles from  '../styles/Header.module.css';

export const Header = () => {
//    const user = getUserLogued();
    return (
      <>
      <div className={styles.headerGlobal}>
             <img src="/banner.png" alt="CafeXYZ" style={{width: '100%', height:"min-content"}}/>
      </div>
      <div className={styles.header}>
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

          <p>You are not logued in!</p>
          <ul className={styles.signinUp}>
            <li className={styles.signIn}>
              <Link href={'/login'}>
                  <a className={"nav-link"}>SIGN-IN</a>
              </Link>
            </li>
            <li>
              <Link href={'/register'}>
                  <a className={"nav-link " + styles.signupBtn}>SIGN-UP</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* user ? (
          <>
          Welcome {user.name? user.name + ' ' + user.lastName : user.email }
          <ul className="signin-up">
            <li onClick={()=>{ authenticationService.logout()}}>
              <Link
                to={'/'}
                className="nav-link signup-btn"
              >
                Logout
              </Link>
            </li>
          </ul>
          </>
          ):(
          <>
          You are not logued in!
          <ul className="signin-up">
            <li className="sign-in">
              <Link to={'/login'} className="nav-link">SIGN-IN</Link>
            </li>
            <li>
              <Link to={'/register'} className="nav-link signup-btn">SIGN-UP</Link>
            </li>
          </ul>
          </>) */}
        
      </div>
      </>
    );
  };