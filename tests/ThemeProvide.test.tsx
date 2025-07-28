import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvide } from '../src/ThemeProvide';

describe('ThemeProvide', () => {
  it('应该在没有现有 context 时创建新的 Provider', () => {
    render(
      <ThemeProvide className="test-theme">
        <div data-testid="child">测试内容</div>
      </ThemeProvide>,
    );

    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();

    // 检查是否包装在 div 中
    const wrapper = child.parentElement;
    expect(wrapper).toHaveClass('test-theme');
  });

  it('应该在 className 相同时直接返回 children', () => {
    const TestComponent = () => (
      <ThemeProvide className="same-theme">
        <div data-testid="inner-child">内部内容</div>
      </ThemeProvide>
    );

    render(
      <ThemeProvide className="same-theme">
        <TestComponent />
      </ThemeProvide>,
    );

    const innerChild = screen.getByTestId('inner-child');
    expect(innerChild).toBeInTheDocument();

    // 当 className 相同时，内层的 ThemeProvide 应该直接返回 children
    // 所以 innerChild 的父元素应该是外层的 div
    const wrapper = innerChild.parentElement;
    expect(wrapper).toHaveClass('same-theme');
  });

  it('应该在 className 不同时创建新的 Provider', () => {
    const TestComponent = () => (
      <ThemeProvide className="different-theme">
        <div data-testid="inner-child">内部内容</div>
      </ThemeProvide>
    );

    render(
      <ThemeProvide className="original-theme">
        <TestComponent />
      </ThemeProvide>,
    );

    const innerChild = screen.getByTestId('inner-child');
    expect(innerChild).toBeInTheDocument();

    // 检查是否有新的包装 div
    const wrapper = innerChild.parentElement;
    expect(wrapper).toHaveClass('different-theme');
  });

  it('应该在 contextClassName 为空时创建新的 Provider', () => {
    const TestComponent = () => (
      <ThemeProvide className="new-theme">
        <div data-testid="inner-child">内部内容</div>
      </ThemeProvide>
    );

    render(
      <ThemeProvide className="">
        <TestComponent />
      </ThemeProvide>,
    );

    const innerChild = screen.getByTestId('inner-child');
    expect(innerChild).toBeInTheDocument();

    // 检查是否有新的包装 div
    const wrapper = innerChild.parentElement;
    expect(wrapper).toHaveClass('new-theme');
  });

  it('应该在嵌套的相同 className 中避免重复包装', () => {
    const InnerComponent = () => (
      <ThemeProvide className="nested-theme">
        <div data-testid="deep-child">深层内容</div>
      </ThemeProvide>
    );

    const MiddleComponent = () => (
      <ThemeProvide className="nested-theme">
        <InnerComponent />
      </ThemeProvide>
    );

    render(
      <ThemeProvide className="nested-theme">
        <MiddleComponent />
      </ThemeProvide>,
    );

    const deepChild = screen.getByTestId('deep-child');
    expect(deepChild).toBeInTheDocument();

    // 检查是否只有一个包装 div
    const wrapper = deepChild.parentElement;
    expect(wrapper).toHaveClass('nested-theme');
  });

  it('应该正确处理复杂的 children 结构', () => {
    const ComplexChildren = () => (
      <>
        <div data-testid="child1">子元素1</div>
        <div data-testid="child2">子元素2</div>
        <span data-testid="child3">子元素3</span>
      </>
    );

    render(
      <ThemeProvide className="complex-theme">
        <ComplexChildren />
      </ThemeProvide>,
    );

    expect(screen.getByTestId('child1')).toBeInTheDocument();
    expect(screen.getByTestId('child2')).toBeInTheDocument();
    expect(screen.getByTestId('child3')).toBeInTheDocument();
  });

  it('应该测试 contextClassName 为空字符串的情况', () => {
    // 创建一个没有 ThemeContext 的环境
    const TestComponent = () => (
      <ThemeProvide className="standalone-theme">
        <div data-testid="standalone-child">独立内容</div>
      </ThemeProvide>
    );

    render(<TestComponent />);

    const standaloneChild = screen.getByTestId('standalone-child');
    expect(standaloneChild).toBeInTheDocument();

    // 检查是否有包装 div
    const wrapper = standaloneChild.parentElement;
    expect(wrapper).toHaveClass('standalone-theme');
  });

  it('应该测试 contextClassName 为 undefined 的情况', () => {
    const TestComponent = () => (
      <ThemeProvide className="undefined-theme">
        <div data-testid="undefined-child">未定义内容</div>
      </ThemeProvide>
    );

    render(<TestComponent />);

    const undefinedChild = screen.getByTestId('undefined-child');
    expect(undefinedChild).toBeInTheDocument();

    // 检查是否有包装 div
    const wrapper = undefinedChild.parentElement;
    expect(wrapper).toHaveClass('undefined-theme');
  });
});
