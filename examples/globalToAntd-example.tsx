import { Button, Card, ConfigProvider, Space, Typography } from 'antd';
import React from 'react';
import { convertGlobalToAntdCssToken, convertGlobalToAntdToken } from '../src';

const { Title, Paragraph } = Typography;

const GlobalToAntdExample: React.FC = () => {
  // 获取转换后的 Ant Design token
  const antdToken = convertGlobalToAntdToken();
  const antdTokenCssVar = convertGlobalToAntdCssToken();

  console.log(antdTokenCssVar);
  return (
    <div
      className="my-component"
      style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}
    >
      <Title level={2}>GlobalToAntd Token 转换示例</Title>

      {/* 基本使用 */}
      <div style={{ marginBottom: '20px' }}>
        <Title level={3}>基本用法</Title>
        <Paragraph>
          使用 <code>convertGlobalToAntdToken()</code> 函数将 global token
          转换为 Ant Design token 格式。
        </Paragraph>
      </div>

      {/* 在 ConfigProvider 中使用 */}
      <div style={{ marginBottom: '20px' }}>
        <Title level={3}>在 ConfigProvider 中使用</Title>
        <Paragraph>
          将转换后的 token 传递给 Ant Design 的 ConfigProvider 组件。
        </Paragraph>

        <ConfigProvider
          theme={{
            token: antdToken,
          }}
        >
          <Card title="使用转换后的 Token" style={{ marginBottom: '16px' }}>
            <Space>
              <Button type="primary">主要按钮</Button>
              <Button type="default">默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="text">文本按钮</Button>
              <Button type="link">链接按钮</Button>
            </Space>
          </Card>
        </ConfigProvider>

        <ConfigProvider
          theme={{
            hashed: true,
            token: antdTokenCssVar,
          }}
        >
          <Card
            title="使用转换后的 css var Token"
            style={{ marginBottom: '16px' }}
          >
            <Space>
              <Button type="primary">主要按钮</Button>
              <Button type="default">默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="text">文本按钮</Button>
              <Button type="link">链接按钮</Button>
            </Space>
          </Card>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default GlobalToAntdExample;
