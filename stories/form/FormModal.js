import React from 'react'
import { Form, Input, Modal } from 'antd';
const FormItem = Form.Item
const TextArea = Input.TextArea

@Form.create()
class FormModal extends React.Component {

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
      <Modal
        title='填写沟通记录'
        visible={true}
        okText='确认'
        cancelText='取消'
        onOk={this.handleSubmit}
        >
        <Form className='antx-form-horizontal'>
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
          <FormItem label='退款记录'>
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
        </Form>
      </Modal>
    )
  }
}

export default FormModal
