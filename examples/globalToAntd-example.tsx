import {
  ThemeProvider,
  convertGlobalToAntdCssToken,
  genComponentsToken,
  globalThemeToken,
  processTokenMappingToAntd,
  themeAlgorithm,
  useCSSVariables,
} from '@ant-design/theme-token';
import {
  Button,
  Card,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Space,
  Typography,
} from 'antd';
import React, { useMemo, useState } from 'react';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const GlobalToAntdExample: React.FC = () => {
  // 状态管理：编辑器的主题配置
  const [customThemeToken, setCustomThemeToken] = useState(() => {
    // 初始化时使用默认的 globalThemeToken
    return JSON.stringify(globalThemeToken, null, 2);
  });

  // 解析自定义主题配置
  const parsedThemeToken = useMemo(() => {
    try {
      return JSON.parse(customThemeToken);
    } catch (error) {
      console.error('主题配置解析错误:', error);
      return globalThemeToken;
    }
  }, [customThemeToken]);

  // 获取转换后的 Ant Design token
  const antdTokenCssVar = convertGlobalToAntdCssToken();

  // 处理主题配置更新
  const handleThemeChange = (value: string) => {
    setCustomThemeToken(value);
  };

  // 重置为默认主题
  const handleReset = () => {
    setCustomThemeToken(JSON.stringify(globalThemeToken, null, 2));
  };

  useCSSVariables('my-component', parsedThemeToken);

  console.log(parsedThemeToken, 'parsedThemeToken');
  console.log(
    processTokenMappingToAntd(parsedThemeToken),
    'processTokenMappingToAntd',
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ThemeProvider className="my-component" cssVariables={globalThemeToken}>
        <Title level={2}>GlobalToAntd Token 转换示例</Title>

        {/* 主题编辑器 */}
        <div style={{ marginBottom: '20px' }}>
          <Title level={3}>主题编辑器</Title>
          <Paragraph>
            编辑下方的 JSON
            配置来实时修改主题变量。修改后会自动应用到下面的示例中。
          </Paragraph>

          <Card title="主题配置编辑器" style={{ marginBottom: '16px' }}>
            <Form layout="vertical">
              <Form.Item label="主题配置 (JSON)">
                <TextArea
                  rows={15}
                  value={customThemeToken}
                  onChange={(e) => handleThemeChange(e.target.value)}
                  placeholder="请输入有效的 JSON 格式主题配置"
                  style={{ fontFamily: 'monospace', fontSize: '12px' }}
                />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button onClick={handleReset} type="default">
                    重置为默认主题
                  </Button>
                  <Text type="secondary">
                    {parsedThemeToken === globalThemeToken
                      ? '使用默认主题'
                      : '使用自定义主题'}
                  </Text>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </div>

        <Divider />

        {/* 使用 CSS 变量的自定义组件 */}
        <div style={{ marginBottom: '20px' }}>
          <Title level={3}>使用 CSS 变量的自定义组件</Title>
          <Paragraph>
            使用 parsedThemeToken 中的变量构造的按钮、文本和卡片组件。
          </Paragraph>

          {/* 自定义按钮组件 */}
          <Card title="自定义按钮" style={{ marginBottom: '16px' }}>
            <Space>
              <button
                type="button"
                style={{
                  backgroundColor: 'var(--color-blue-9)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--border-radius-control-base)',
                  padding: '8px 16px',
                  fontSize: 'var(--font-size-body-sm)',
                  fontFamily: 'var(--font-family)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                主要按钮
              </button>

              <button
                type="button"
                style={{
                  backgroundColor: 'var(--color-green-9)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--border-radius-control-base)',
                  padding: '8px 16px',
                  fontSize: 'var(--font-size-body-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                成功按钮
              </button>

              <button
                type="button"
                style={{
                  backgroundColor: 'var(--color-orange-9)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--border-radius-control-base)',
                  padding: '8px 16px',
                  fontSize: 'var(--font-size-body-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                警告按钮
              </button>

              <button
                type="button"
                style={{
                  backgroundColor: 'var(--color-red-9)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--border-radius-control-base)',
                  padding: '8px 16px',
                  fontSize: 'var(--font-size-body-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                错误按钮
              </button>
            </Space>
          </Card>

          {/* 自定义文本组件 */}
          <Card title="自定义文本" style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: '12px' }}>
              <h4
                style={{
                  color: 'var(--color-gray-text)',
                  fontSize: 'var(--font-size-h3)',
                  fontFamily: 'var(--font-family)',
                  margin: 0,
                }}
              >
                标题文本
              </h4>
              <p
                style={{
                  color: 'var(--color-gray-text-secondary)',
                  fontSize: 'var(--font-size-body-sm)',
                  fontFamily: 'var(--font-family)',
                  margin: '8px 0 0 0',
                  lineHeight: 'var(--line-height-body-sm)',
                }}
              >
                这是使用主题变量的正文文本。颜色、字体大小和行高都会根据主题配置自动调整。
              </p>
            </div>

            <div>
              <span
                style={{
                  color: 'var(--color-blue-9)',
                  fontSize: 'var(--font-size-body-sm)',
                  fontWeight: 'bold',
                }}
              >
                强调文本
              </span>
              <span
                style={{
                  color: 'var(--color-green-9)',
                  fontSize: 'var(--font-size-body-sm)',
                  marginLeft: '12px',
                }}
              >
                成功文本
              </span>
              <span
                style={{
                  color: 'var(--color-orange-9)',
                  fontSize: 'var(--font-size-body-sm)',
                  marginLeft: '12px',
                }}
              >
                警告文本
              </span>
              <span
                style={{
                  color: 'var(--color-red-9)',
                  fontSize: 'var(--font-size-body-sm)',
                  marginLeft: '12px',
                }}
              >
                错误文本
              </span>
            </div>
          </Card>

          {/* 自定义卡片组件 */}
          <Card title="自定义卡片" style={{ marginBottom: '16px' }}>
            <div
              style={{
                border: '1px solid var(--color-gray-border-light)',
                borderRadius: 'var(--border-radius-card-m)',
                padding: '16px',
                backgroundColor: 'var(--color-gray-bg-card-light)',
                fontSize: 'var(--font-size-body-sm)',
                fontFamily: 'var(--font-family)',
                boxShadow: 'var(--shadow-card-l1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-dialog-l3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card-l1)';
              }}
            >
              <h4
                style={{
                  color: 'var(--color-gray-text)',
                  fontSize: 'var(--font-size-h3)',
                  marginTop: 0,
                  marginBottom: '12px',
                }}
              >
                自定义卡片标题
              </h4>
              <p
                style={{
                  color: 'var(--color-gray-text-secondary)',
                  margin: 0,
                  lineHeight: 'var(--line-height-body-sm)',
                }}
              >
                这是一个使用 CSS
                变量的自定义卡片组件。背景色、边框、圆角、阴影等样式都会根据主题配置自动调整。
              </p>
            </div>
          </Card>
        </div>

        <Divider />

        {/* 在 ConfigProvider 中使用 */}
        <div style={{ marginBottom: '20px' }}>
          <Title level={3}>在 ConfigProvider 中使用</Title>
          <Paragraph>
            将转换后的 token 传递给 Ant Design 的 ConfigProvider 组件。
          </Paragraph>

          <ConfigProvider
            theme={{
              algorithm: themeAlgorithm,
              token: processTokenMappingToAntd(parsedThemeToken),
              components: genComponentsToken(),
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

          <Card title="antd 默认" style={{ marginBottom: '16px' }}>
            <Space>
              <Button type="primary">主要按钮</Button>
              <Button type="default">默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="text">文本按钮</Button>
              <Button type="link">链接按钮</Button>
            </Space>
          </Card>
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
      </ThemeProvider>
    </div>
  );
};

export default GlobalToAntdExample;
