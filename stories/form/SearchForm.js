import React from 'react'
import { Form, Input, Button, Select, message } from 'antd';
const FormItem = Form.Item

class SearchForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(
      (err, values) => {
        if (!err) {
          message.success('click')
        }
      }
    )
  }

  render () {
    return (
      <Form
        className='donut-form-inline'
        onSubmit={this.handleSubmit}
        style={{ paddingTop: '30px', paddingBottom: '6px' }}>
        <FormItem label='填写项'>
          <Select placeholder="选择选项">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </FormItem>
        <FormItem label='填写项'>
          <Input placeholder='请填写' />
        </FormItem>
        <FormItem label='填写项'>
          <Input placeholder='请填写' />
        </FormItem>
        <FormItem label='填写项'>
          <Input placeholder='请填写' />
        </FormItem>
        <FormItem label='填写项'>
          <Input placeholder='请填写' />
        </FormItem>
        <FormItem label='填写项'>
          <Input placeholder='请填写' />
        </FormItem>
        <FormItem className='form-btns'>
          <Button type="primary" htmlType="submit">查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    )
  }
}

export default SearchForm
