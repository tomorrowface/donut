import React from 'react'
import { Select } from 'antd'

class MutipleSelect extends React.Component {

  getMaxTagPlaceholder = (omittedValues) => {
    return `...已选${omittedValues.length+2}项`
  }

  render () {

    return (
      <Select
        className='antx-multiple-select'
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="请选择"
        allowClear
        maxTagCount={2}
        maxTagPlaceholder={this.getMaxTagPlaceholder}
      >
        <Option key='a1'>a1</Option>
        <Option key='a11'>a11</Option>
        <Option key='a111'>a111</Option>
        <Option key='a1111'>a1111</Option>
        <Option key='a11111'>a11111</Option>
        <Option key='a111111'>a1111</Option>
        <Option key='a1111111'>a11111</Option>
      </Select>
    )
  }
}

export default MutipleSelect
