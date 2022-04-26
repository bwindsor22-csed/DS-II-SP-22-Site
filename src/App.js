import React, { useState } from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import './App.css';

import About from './components/about';
import Conceptual from './components/conceptual-hw';
import Projects from './components/projects';
import Homework from './components/homework';
import Lectures from './components/lectures';
import Exams from './components/exams';

const App = () => {
    const [tab, setTab] = useState('ng');

    const handleInputChange = (e) => {
        setTab(e);
    }

    return (
      <div className="App">
          <header className="App-header">
              <Tabs id="TabsExample" onChange={handleInputChange} selectedTabId={tab}>
                  <Tab id="ab" title="About" panel={<About />} />
                  <Tab id="hw" title="Homework" panel={<Homework />}  />
                  <Tab id="ch" title="Conceptual HW" panel={<Conceptual />}  />
                  <Tab id="pr" title="Projects" panel={<Projects />}  />
                  <Tab id="le" title="Lectures" panel={<Lectures />}  />
                  <Tab id="cw" title="Exams" panel={<Exams />} />
              </Tabs>
          </header>
      </div>
  );
}

export default App;
