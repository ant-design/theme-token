import { Button, Card, ConfigProvider, Space, Typography } from 'antd';
import React from 'react';
import { convertGlobalToAntdToken } from '../src/token/globalToAntd';

const { Title, Paragraph, Text } = Typography;

const GlobalToAntdExample: React.FC = () => {
  // 获取转换后的 Ant Design token
  const antdToken = convertGlobalToAntdToken();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Title level={2}>GlobalToAntd Token 转换示例</Title>

      {/* 基本使用 */}
      <div style={{ marginBottom: '20px' }}>
        <Title level={3}>基本用法</Title>
        <Paragraph>
          使用 <code>convertGlobalToAntdToken()</code> 函数将 global token
          转换为 Ant Design token 格式。
        </Paragraph>

        <Card title="转换结果预览" style={{ marginBottom: '16px' }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <div>
              <Text strong>主要颜色 (colorPrimary):</Text>{' '}
              {antdToken.colorPrimary}
            </div>
            <div>
              <Text strong>成功颜色 (colorSuccess):</Text>{' '}
              {antdToken.colorSuccess}
            </div>
            <div>
              <Text strong>警告颜色 (colorWarning):</Text>{' '}
              {antdToken.colorWarning}
            </div>
            <div>
              <Text strong>错误颜色 (colorError):</Text> {antdToken.colorError}
            </div>
            <div>
              <Text strong>文本颜色 (colorText):</Text> {antdToken.colorText}
            </div>
            <div>
              <Text strong>背景颜色 (colorBgContainer):</Text>{' '}
              {antdToken.colorBgContainer}
            </div>
          </Space>
        </Card>
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
      </div>

      {/* 代码示例 */}
      <div style={{ marginBottom: '20px' }}>
        <Title level={3}>代码示例</Title>
        <pre
          style={{
            backgroundColor: '#f5f5f5',
            padding: '15px',
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '14px',
          }}
        >
          {`import { convertGlobalToAntdToken } from '@ant-design/theme-token';
import { ConfigProvider, Button } from 'antd';

const MyApp = () => {
  // 获取转换后的 Ant Design token
  const antdToken = convertGlobalToAntdToken();

  return (
    <ConfigProvider
      theme={{
        token: antdToken,
      }}
    >
      <Button type="primary">使用转换后的 Token</Button>
    </ConfigProvider>
  );
};`}
        </pre>
      </div>

      {/* Token 映射说明 */}
      <div style={{ marginBottom: '20px' }}>
        <Title level={3}>Token 映射说明</Title>
        <Card>
          <Paragraph>
            <Text strong>颜色映射:</Text>
          </Paragraph>
          <ul>
            <li>
              <code>--color-blue-9</code> → <code>colorPrimary</code>
            </li>
            <li>
              <code>--color-green-9</code> → <code>colorSuccess</code>
            </li>
            <li>
              <code>--color-orange-9</code> → <code>colorWarning</code>
            </li>
            <li>
              <code>--color-red-9</code> → <code>colorError</code>
            </li>
            <li>
              <code>--color-gray-a12</code> → <code>colorText</code>
            </li>
            <li>
              <code>--color-gray-1</code> → <code>colorBgContainer</code>
            </li>
          </ul>

          <Paragraph>
            <Text strong>间距映射:</Text>
          </Paragraph>
          <ul>
            <li>
              <code>--margin-component-xs</code> → <code>marginXS</code>
            </li>
            <li>
              <code>--margin-component-sm</code> → <code>marginSM</code>
            </li>
            <li>
              <code>--margin-component-base</code> → <code>margin</code>
            </li>
            <li>
              <code>--margin-component-lg</code> → <code>marginLG</code>
            </li>
          </ul>

          <Paragraph>
            <Text strong>圆角映射:</Text>
          </Paragraph>
          <ul>
            <li>
              <code>--border-radius-control-xs</code> →{' '}
              <code>borderRadiusXS</code>
            </li>
            <li>
              <code>--border-radius-control-sm</code> →{' '}
              <code>borderRadiusSM</code>
            </li>
            <li>
              <code>--border-radius-control-base</code> →{' '}
              <code>borderRadius</code>
            </li>
            <li>
              <code>--border-radius-control-lg</code> →{' '}
              <code>borderRadiusLG</code>
            </li>
          </ul>
        </Card>
      </div>

      {/* 完整 Token 列表 */}
      <div>
        <Title level={3}>完整 Token 列表</Title>
        <Card>
          <Paragraph>转换后的 token 包含以下类别：</Paragraph>
          <ul>
            <li>
              <strong>颜色 Token:</strong> colorPrimary, colorSuccess,
              colorWarning, colorError, colorText 等
            </li>
            <li>
              <strong>间距 Token:</strong> marginXS, marginSM, margin, marginLG,
              marginXL 等
            </li>
            <li>
              <strong>圆角 Token:</strong> borderRadiusXS, borderRadiusSM,
              borderRadius, borderRadiusLG 等
            </li>
            <li>
              <strong>字体 Token:</strong> fontSize, fontWeight, lineHeight 等
            </li>
            <li>
              <strong>阴影 Token:</strong> boxShadow, boxShadowSecondary 等
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default GlobalToAntdExample;
