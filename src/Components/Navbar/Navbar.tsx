import React from "react";
import "./navbar.styles.css";

interface Navbar {
  title: string;
}

const Navbar: React.FC<Navbar> = (props: any) => {
  return <div className="navbar">{props.title}</div>;
};

// const mapStateToProps = (state: any) => {
//   return {
//     todos: state.todos.length,
//   };
// };

export default Navbar;
