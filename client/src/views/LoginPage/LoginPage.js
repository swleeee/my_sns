import React from 'react'

import styles from '../LoginPage/LoginPage.module.css';

import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


function LoginPage() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
 

      return (
        <div className={styles.container}>
        <h1>mySNS</h1>
        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          
        >
          
          <Form.Item
            name="username"
            className={styles.loginForm__item}
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{color: 'white'}}>Remember me</Checkbox>
            </Form.Item>
    
            <a href="#none">
              Forgot password
            </a>
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginForm__button}>
              Log in
            </Button>
            <a href="/register">register now!</a>
          </Form.Item>
        </Form>
        </div>
      );
}

export default LoginPage
