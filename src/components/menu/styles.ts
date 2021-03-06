import styled from 'styled-components'

export const Header = styled.header`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

 
  background-color: #7159c1;


 .container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 980px;
  
  margin: auto;
}

 img {
  width: 150px;
  margin-left: 20px;
  padding: 15px 0;
}

 nav ul {
  display: flex;
}

 nav ul li {
  list-style: none;
}

 nav ul li a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 1.4rem; 
  padding: 2.4rem;
  transition: all 250ms linear 0s;
}

 nav ul li a:hover {
  background: rgba(255,255,255, 0.15)
}

@media (max-width:746px){
    nav{
        display: none;
    }
    .one,
    .two,
    .three {
        background-color: #fff;
        height: 5px;
        width: 100%;
        margin: 6px auto;

        transition-duration: 0.3s;
    }

    .menu-toggle {
        width: 40px;
        height: 30px;
        margin-right: 20px;
    }

    /* fullscreen */
    .menu-section.on {
        position: absolute;
        top:0;
        left:0;
        
        width: 100vw;
        height: 100vh;

        background-color: #7159c1;
        
        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-section.on nav {
        display: block;
    }

    .menu-section.on .menu-toggle {
        position: absolute;
        right: 25px;
        top: 15px;
    }

    .menu-section.on .menu-toggle .one {
        transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section.on .menu-toggle .two {
        opacity: 0;
    }

    .menu-section.on .menu-toggle .three {
        transform: rotate(-45deg) translate(8px, -9px);
    }

    .menu-section.on nav ul {
        text-align: center;
        display: block;
    }

    .menu-section.on nav ul a{
        transition-duration: 0.5s;
        font-size: 3rem;
        line-height: 4rem;
        display: block;
        
    }

  }


  `