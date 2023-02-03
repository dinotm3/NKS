import React from "react";

import Footer from "./Footer";
import Nav from "./Nav";

const Layout = (props) => (
  <div class="text-center p-10 h-screen">{props.children}</div>
);

export { Layout, Nav, Footer };
