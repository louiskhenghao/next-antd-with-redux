import React, { PureComponent } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class LayoutFooter extends PureComponent {
  render() {
    return (
      <Layout>
        <Footer style={{ textAlign: 'center' }}>
          NextJs with Ant Design Starter ©2018 Created by Lava X
        </Footer>
      </Layout>
    );
  }
}
