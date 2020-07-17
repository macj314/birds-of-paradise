import React from "react";

function Header() {
  const headerStyles = {
    backgroundColor: 'black', //#000000
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
    color: 'white'
  }
  return (
    <React.Fragment>
      <div style={headerStyles}>
      <h1>HEADER Header header</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio harum sunt dolorem est nobis eaque libero aliquid deleniti. Pariatur possimus quis quam obcaecati dolor saepe delectus, in doloribus animi! Dolorum!</p>
      </div>
      {/* <Image src={catDonut}>
        <Transformation width="250" height="250" gravity="faces" crop="fill" />
      </Image> */}
    </React.Fragment>
  )
}

export default Header;