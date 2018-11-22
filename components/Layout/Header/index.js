import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styles from './styles';
import LogoDark from 'assets/Logo.svg';

const { Header } = Layout;

class LayoutHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header className="header">
            <div className="logo">
              <Link href="/">
                <img src={LogoDark} alt="LavaX Technologies Sdn Bhd" />
              </Link>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <style jsx>{styles}</style>
      </React.Fragment>
    );
  }
}

export default LayoutHeader;
