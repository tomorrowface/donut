import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Input, message } from 'antd';
import { CWraper, CItem } from '../helper'
import 'antd/dist/antd.less'
import '../../style/index.less'

storiesOf('基础控件', module)
  .add('按钮', () => (
    <CWraper>
      <CItem label='default'>
        <Button type='default'>按钮</Button>
      </CItem>
      <CItem label='primary'>
        <Button type='primary'>按钮</Button>
      </CItem>
    </CWraper>
  ))
  .add('输入框', () => (
    <CWraper width='500'>
      <CItem label='normal'>
        <Input />
      </CItem>
      <CItem label='disabled'>
        <Input disabled />
      </CItem>
    </CWraper>
  ))
  .add('全局提示', () => (
    <CWraper>
      <CItem label='成功提示'>
        <Button type='primary' onClick={() => {
          message.success('This is a message of success');
        }}>Success</Button>
      </CItem>
      <CItem label='错误提示'>
        <Button type='primary' onClick={() => {
          message.error('This is a message of error');
        }}>Error</Button>
      </CItem>
      <CItem label='警告提示'>
        <Button type='primary' onClick={() => {
          message.warning('This is a message of warning');
        }}>Warning</Button>
      </CItem>
    </CWraper>
  ))
