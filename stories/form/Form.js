import React from 'react'
import { Form, Input, Button, Popover, Icon, message } from 'antd';
const FormItem = Form.Item
const TextArea = Input.TextArea

@Form.create()
class D_Form extends React.Component {

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
    const { getFieldDecorator } = this.props.form

    return (
      <Form
        className='antx-form-horizontal'
        onSubmit={this.handleSubmit}
        style={{ paddingTop: '30px', paddingBottom: '6px' }}>
        <FormItem label='联系人'>
          {
            getFieldDecorator('contact_name', {
              rules: [{
                required: true, message: '请填写联系人'
              }],
              initialValue: ''
            })(
              <Input />
            )
          }
        </FormItem>
        <FormItem label='联系电话'>
          {
            getFieldDecorator('contact_number', {
              initialValue: ''
            })(
              <Input />
            )
          }
        </FormItem>
        <FormItem label={(
          <span>
            <Popover content='就是退款的记录' title='退款记录'>
              <Icon type='question-circle' />
            </Popover>退款记录
          </span>
        )}>
          {
            getFieldDecorator('record', {
              rules: [{
                required: true, message: '请填写退款记录'
              }]
            })(
              <TextArea rows={4} />
            )
          }
        </FormItem>
        <FormItem className='antx-form-btns'>
          <Button type="primary" htmlType="submit">确定</Button>
          <Button>取消</Button>
        </FormItem>
      </Form>
    )
  }
}

export default D_Form
