import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Card } from 'antd';

import Bio from './screens/Bio';
import Blog from './screens/Blog';
import Portfolio from './screens/Portfolio';
import Visits from './screens/Visits';
import Contact from './screens/Contact';

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'bio'
        };
        this.screens = ['bio', 'portfolio', 'visits', 'blog', 'contact'];

        this.appBarNavButtons = this.appBarNavButtons.bind(this);
    }

    appBarNavButtons(e) {
        if (this.state.view !== e.key) {
            this.setState({ view: e.key });
        }
    }

    render() {
        return (
            <div>
                <Menu
                    onClick={this.appBarNavButtons}
                    selectedKeys={this.state.view}
                    mode='horizontal'
                    style={{ width: '100%' }}
                >
                    {
                        this.screens.map((e) => {
                            return (
                                <Menu.Item
                                    key={e}
                                >
                                    {e.toUpperCase()}
                                </Menu.Item>
                            );
                        })
                    }
                </Menu>
                <Card
                    style={{
                        width: '-64px',
                        margin: '32px'
                    }}
                >
                    {(this.state.view === 'bio') && (
                        <Bio />
                    )}
                    {(this.state.view === 'portfolio') && (
                        <Portfolio />
                    )}
                    {(this.state.view === 'visits') && (
                        <Visits />
                    )}
                    {(this.state.view === 'blog') && (
                        <Blog />
                    )}
                    {(this.state.view === 'contact') && (
                        <Contact />
                    )}
                </Card>
            </div>
        );
    }
}

export default App;
