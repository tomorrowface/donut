import React from 'react'
import { Form, Input, Button, Select, Icon, message } from 'antd';
const FormItem = Form.Item

class SearchFormMore extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      isFold: false
    }
  }

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

  toggleFold = () => {
    this.setState({ isFold: !this.state.isFold })
  }

  render () {
    const { isFold } = this.state

    return (
      <Form
        className='antx-form-inline'
        onSubmit={this.handleSubmit}
        style={{ paddingTop: '30px', paddingBottom: '6px' }}>
        <FormItem label='填写项'>
          <Select placeholder='选择选项'>
            <Option value='jack'>Jack</Option>
            <Option value='lucy'>Lucy</Option>
            <Option value='tom'>Tom</Option>
          </Select>
        </FormItem>
        <FormItem label='填写项'>
          <Input placeholder='请填写' />
        </FormItem>
        <FormItem label='填写项'>
          <Input placeholder='请填写' />
        </FormItem>
        {
          isFold &&
          <React.Fragment>
            <FormItem label='填写项'>
              <Input placeholder='请填写' />
            </FormItem>
            <FormItem label='填写项'>
              <Input placeholder='请填写' />
            </FormItem>
            <FormItem label='填写项'>
              <Input placeholder='请填写' />
            </FormItem>
          </React.Fragment>
        }
        <FormItem className='antx-form-btns'>
          <Button type='primary' htmlType='submit'>查询</Button>
          <Button>重置</Button>
          {
            isFold
            ? <span className='antx-form-unfold' onClick={this.toggleFold}>
                收起更多选项
                <Icon type='up' />
              </span>
            : <span className='antx-form-fold' onClick={this.toggleFold}>
                展开更多选项
                <Icon type='down' />
              </span>
          }
        </FormItem>
      </Form>
    )
  }
}

export default SearchFormMore
