import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import {
    Layout,
    Card
} from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    BulbOutlined,
    BulbFilled
} from '@ant-design/icons';

import Bio from './screens/Bio';
import Blog from './screens/Blog';
import Portfolio from './screens/Portfolio';
import Visits from './screens/Visits';
import Contact from './screens/Contact';

const { Header, Footer, Sider, Content } = Layout;


/*
<BulbOutlined />
<BulbFilled />
*/



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'bio',
            dark: false
        };
        this.screens = ['bio', 'portfolio', 'visits', 'blog'];
        this.contact = ['github', 'linkedin', 'email'];

        this.menuButtonActions = this.menuButtonActions.bind(this);
    }

    menuButtonActions(e) {
        console.log('EVENT: ', e.key);
        if (this.contact.includes(e.key)) {
            console.log('perform some action');
        } else if (e.key === 'darkMode' || e.key === 'lightMode') {
            this.setState((state) => {
                return {
                    dark: !state.dark
                };
            });
        } else if (this.state.view !== e.key) {
            this.setState({ view: e.key });
        }
    }

    render() {
        return (
            <div>
                <Menu
                    onClick={this.menuButtonActions}
                    selectedKeys={this.state.view}
                    mode='horizontal'
                    style={{ width: '100%' }}
                    theme={(this.state.dark) ? 'dark' : 'light'}
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
                    <Menu.Item
                        key={'github'}
                    >
                        <GithubOutlined />
                    </Menu.Item>
                    <Menu.Item
                        key={'linkedin'}
                    >
                        <LinkedinOutlined />
                    </Menu.Item>
                    <Menu.Item
                        key={'email'}
                    >
                        <MailOutlined />
                    </Menu.Item>
                    {(this.state.dark) && (
                        <Menu.Item
                            key={'lightMode'}
                        >
                            <BulbOutlined />
                        </Menu.Item>
                    )}
                    {(!this.state.dark) && (
                        <Menu.Item
                        key={'darkMode'}
                    >
                        <BulbFilled />
                    </Menu.Item>
                    )}
                </Menu>
                <Card
                    bordered={false}
                    style={{
                        width: '-64px',
                        margin: '32px',
                        color: (this.state.dark) && '#ffffff',
                        backgroundColor: (this.state.dark) && '#001529'
                    }}
                >
                    {(this.state.view === 'bio') && (
                        <Bio
                            dark={this.state.dark}
                        />
                    )}
                    {(this.state.view === 'portfolio') && (
                        <Portfolio
                            dark={this.state.dark}
                        />
                    )}
                    {(this.state.view === 'visits') && (
                        <Visits
                            dark={this.state.dark}
                        />
                    )}
                    {(this.state.view === 'blog') && (
                        <Blog
                            dark={this.state.dark}
                        />
                    )}
                </Card>
            </div>
        );
    }
}

export default App;
