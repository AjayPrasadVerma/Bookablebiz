import classes from "./MainNavigation.module.css";
import CartIcon from "./CattIcon";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.image}>
          <img src="https://s3-alpha-sig.figma.com/img/e5bd/badc/55b6dfe96d5fbceb18fb44086fc10457?Expires=1688342400&Signature=iW8g2Ad39iIrSODbrmpC~5Y4vXWLuDjvkCTd~MoSph-Xuyynsab9ji8tF-w~wnj5MaabBYeeO0~FoViA1TgZ1jAYXV3w7KoH1VcSqMlown8G70DFhqZ1kT823yD59kevRbrT3fBd92XGEOddjXMKvCHXsKYk8bgVXHLjDZcNqi9XhoEIwtGXBUbjD0ldUEpD9SelNQ8T56So6qq92Op98dHTvMfTdKu4JXIY0AVDGzqL6nPFFqiXwEAUTpCkiILaAi1DeazU2pRMpWcaAuTNk9m0kXf1YO7lRBl7RJ2uDpSKWzEvFTZ94aVOeLb4X97MOZsr5iNOxg43mjuVKxx~yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>
        <div className={classes.btn}>
          <div>Service categories</div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Login</Link>
          </li>
          <li>
            <Link href="/">
              <CartIcon />
            </Link>
          </li>
        </ul>
        <button>Business login</button>
      </nav>
    </header>
  );
}

export default MainNavigation;
