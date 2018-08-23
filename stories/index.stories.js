import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import { Button, Input, Modal } from 'antd';
import Form from './components/Form'
import FormModal from './components/FormModal'
import SearchForm from './components/SearchForm'
import SearchFormMore from './components/SearchFormMore'
import 'antd/dist/antd.less'
import '../style/index.less'

const CWraper = props => (
  <div style={{ padding: '40px', width: `${props.width}px` || 'auto' }}>
    {props.children}
  </div>
)

const CItem = props => (
  <div style={{ display: 'flex', padding: '20px' }}>
    <div style={{ flexBasis: '56px', marginRight: '40px', color: '#666' }}>
      {props.label}
    </div>
    <div style={{ flex: 1 }}>{props.children}</div>
  </div>
)

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

storiesOf('表单', module)
  .add('基础表单', () => (
    <CWraper>
      <Form />
    </CWraper>
  ))
  .add('查询表单', () => (
    <CWraper>
      <SearchForm />
    </CWraper>
  ))
  .add('查询表单—收缩展开', () => (
    <CWraper>
      <SearchFormMore />
    </CWraper>
  ))

storiesOf('弹窗', module)
  .add('Confirm', () => (
    <CWraper>
      <CItem label='只有标题'>
        <Button type="primary" onClick={() => {
          Modal.confirm({
            title: '确认要删除这条信息吗？',
            okText: '确定',
            cancelText: '取消',
          })
        }}>Confirm</Button>
      </CItem>
      <CItem label='有标题和描述'>
        <Button type="primary" onClick={() => {
          Modal.confirm({
            title: '确认要删除这条信息吗？',
            content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
            okText: '确定',
            cancelText: '取消',
          })
        }}>Confirm</Button>
      </CItem>
    </CWraper>
  ))
  .add('Form', () => (
    <CWraper>
      <FormModal />
    </CWraper>
  ))

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
