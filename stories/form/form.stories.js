import React from 'react';
import { storiesOf } from '@storybook/react';
import { CWraper } from '../helper'
import Form from './Form'
import SearchForm from './SearchForm'
import SearchFormMore from './SearchFormMore'
import FormModal from './FormModal'
import 'antd/dist/antd.less'
import '../../style/index.less'

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
  .add('表单弹窗', () => (
    <CWraper>
      <FormModal />
    </CWraper>
  ))

