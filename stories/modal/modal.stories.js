import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Modal } from 'antd';
import { CWraper, CItem } from '../helper'
import 'antd/dist/antd.less'
import '../../style/index.less'

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
