import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Button, Input, message, Tabs, Radio, Checkbox, Select
} from 'antd';
// import MultipleSelect from '../../components/MultipleSelect'
import MultipleSelect from '../../components/Select'
import { CWraper, CItem } from '../helper'
import 'antd/dist/antd.less'
import '../../style/index.less'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const CheckboxGroup = Checkbox.Group
const TabPane = Tabs.TabPane
const Option = Select.Option

const list = ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7',
'a11', 'b22', 'c33', 'd44', 'e55', 'f66', 'g77',]

storiesOf('基础控件', module)
  .add('Button 按钮', () => (
    <CWraper>
      <CItem label='default'>
        <Button type='default'>按钮</Button>
      </CItem>
      <CItem label='primary'>
        <Button type='primary'>按钮</Button>
      </CItem>
    </CWraper>
  ))
  .add('Input 输入框', () => (
    <CWraper width='500'>
      <CItem label='Normal'>
        <Input placeholder='请输入xxxxxxx' />
      </CItem>
      <CItem label='Disabled'>
        <Input placeholder='请输入xxxxxxx' disabled />
      </CItem>
    </CWraper>
  ))
  .add('Radio 单选框', () => (
    <CWraper>
      <CItem label='基本样式'>
        <RadioGroup>
          <Radio disabled value={1}>选项一</Radio>
          <Radio value={2}>选项二</Radio>
          <Radio value={3}>选项三</Radio>
        </RadioGroup>
      </CItem>
      <CItem label='按钮样式'>
        <RadioGroup>
          <RadioButton disabled value={1}>选项一</RadioButton>
          <RadioButton value={2}>选项二</RadioButton>
          <RadioButton value={3}>选项三</RadioButton>
        </RadioGroup>
      </CItem>
    </CWraper>
  ))
  .add('Checkbox 多选框', () => (
    <CWraper>
      <CItem label='基本样式'>
        <CheckboxGroup options={[
          { label: '选项一', value: '1' },
          { label: '选项二', value: '2' },
          { label: '选项三', value: '3' }
        ]} />
      </CItem>
      <CItem>
        <CheckboxGroup options={[
          { label: '选项一', value: '1' },
          { label: '选项二', value: '2' },
          { label: '选项三', value: '3', disabled: true }
        ]} />
      </CItem>
      <CItem label='按钮样式'>
        <CheckboxGroup
          className='antx-checkbox-group'
          options={[
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' },
            { label: '选项二', value: '3' }
          ]}/>
      </CItem>
      <CItem>
        <CheckboxGroup
          className='antx-checkbox-button-group'
          options={[
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' },
            { label: '选项二', value: '3', disabled: true }
          ]}/>
      </CItem>
    </CWraper>
  ))
  .add('Message 全局提示', () => (
    <CWraper>
      <CItem label='成功提示'>
        <Button onClick={() => {
          message.success('This is a message of success');
        }}>Success</Button>
      </CItem>
      <CItem label='错误提示'>
        <Button onClick={() => {
          message.error('This is a message of error');
        }}>Error</Button>
      </CItem>
      <CItem label='警告提示'>
        <Button onClick={() => {
          message.warning('This is a message of warning');
        }}>Warning</Button>
      </CItem>
    </CWraper>
  ))
  .add('Tabs 标签页', () => (
    <CWraper width='500'>
      <CItem label='选项卡'>
        <Tabs type='card'>
          <TabPane tab='选项一' key='1'>选项一的内容</TabPane>
          <TabPane tab='选项二' key='2'>选项二的内容</TabPane>
          <TabPane tab='选项三' key='3'>选项三的内容</TabPane>
        </Tabs>
      </CItem>
      <CItem label='下划线'>
        <Tabs>
          <TabPane tab='选项一' key='1'>选项一的内容</TabPane>
          <TabPane tab='选项二' key='2'>选项二的内容</TabPane>
          <TabPane tab='选项三' key='3'>选项三的内容</TabPane>
        </Tabs>
      </CItem>
    </CWraper>
  ))
  .add('Select 选择器', () => (
    <CWraper width='600'>
      <CItem label='单选'>
      <Select showSearch placeholder="请选择">
        <Option value="1">选项一</Option>
        <Option value="2">选项二</Option>
        <Option value="3">选项三</Option>
      </Select>
      </CItem>
      {/* <CItem label='多选'>
        <MultipleSelect list={list} labelInValue />
      </CItem> */}
      <CItem label='多选'>
        <MultipleSelect list={list} labelInValue />
      </CItem>
    </CWraper>
  ))
