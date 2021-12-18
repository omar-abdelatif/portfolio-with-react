import React from 'react';
import Nav from './navbar';
import Header from './header';
import Work from './work'
import Footer from './footer';
import RecentProject from './recent-projects';
import Testmonials from './testmonials';
import Skills from './skills';
const App = () => {
  return (
		<React.Fragment>
			<Nav />
      <Header />
      <Work />
      <RecentProject />
      <Skills />
      <Testmonials />
      <Footer />
		</React.Fragment>
  );
}

export default App
