import React from 'react';
import { storiesOf } from '@storybook/react';
import { CWraper, CItem } from '../helper'
import Table from './Table'
import 'antd/dist/antd.less'
import '../../style/index.less'

storiesOf('表格', module)
  .add('基础表格', () => (
    <CWraper>
      <Table />
    </CWraper>
  ))
