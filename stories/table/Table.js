import React from 'react'
import { Table } from 'antd'
import { dataSource, columns } from './config'

export default class D_Table extends React.Component {

  render () {
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          size: 'small',
          showSizeChanger: true,
          showQuickJumper: true,
          total: 500
        }} />
    )
  }
}
