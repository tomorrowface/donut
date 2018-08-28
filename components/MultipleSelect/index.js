import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import './index.less'

class MultipleSelect extends React.Component {

  static propTypes = {
    list: PropTypes.array,
    fields: PropTypes.object, // 下拉项字段 { valueField: '', labelField: ''}
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    labelInValue: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.array
  }

  static defaultProps = {
    fields: {
      valueField: 'id',
      labelField: 'name'
    },
    placeholder: '请选择'
  }

  constructor (props) {
    super(props)

    this.state = {
      choiceLabels: [],
      choiceValues: [],
      dropdownVisible: false,
      dropdownTop: 34
    }
  }

  componentDidMount () {
    // document.addEventListener('click', () => {
    //   this.hideDropdown()
    // })
    // document.querySelectorAll('.multiple-select').forEach(item => {
    //   item.addEventListener('click', (e) => {
    //     e.stopPropagation()
    //   })
    // })
  }

  showDropdown = () => {
    this.setState({ dropdownVisible: true })
  }

  hideDropdown = () => {
    this.setState({ dropdownVisible: false })
  }

  updateDropdownTop = (select) => {
    const dropdownTop = select ? select.clientHeight : 34

    if (dropdownTop !== this.state.dropdownTop) {
      this.setState({ dropdownTop })
    }
  }

  addChoice = (label, value) => {
    const { choiceValues, choiceLabels } = this.state
    choiceLabels.push(label)
    choiceValues.push(value)

    this.setState({ choiceLabels, choiceValues })
  }

  removeChoice = (index) => {
    const { choiceValues, choiceLabels } = this.state
    choiceValues.splice(index, 1)
    choiceLabels.splice(index, 1)

    this.setState({ choiceLabels, choiceValues })
  }

  renderChoice = () => {
    const { choiceLabels } = this.state

    return choiceLabels.map((item, index) => (
      <li className='ant-select-selection__choice' key={item}>
        <div className='ant-select-selection__choice__content'>{ item }</div>
        <span className='ant-select-selection__choice__remove' onClick={() => this.removeChoice(index)}></span>
      </li>
    ))
  }

  renderSelection = () => {
    const { list, labelInValue, fields } = this.props
    const { choiceLabels, choiceValues } = this.state
    const { labelField, valueField } = fields

    return list.map((item, index) => {
      const label = labelInValue ? item : item[labelField]
      const value = labelInValue ? item : item[valueField]
      const selectIndex = choiceLabels.indexOf(label)
      const isSelect = selectIndex !== -1

      return <li
              key={value}
              className={`ant-select-dropdown-menu-item ${isSelect ? 'ant-select-dropdown-menu-item-selected' : ''}`}
              data-value={value}
              onClick={isSelect ? () => this.removeChoice(selectIndex) : () => this.addChoice(label, value)}>
              <Checkbox checked={isSelect}>{ label }</Checkbox>
            </li>
    })
  }

  render () {
    const { dropdownVisible, dropdownTop } = this.state

    return (
      <div className='multiple-select'>
        <div className='ant-select ant-select-enabled' ref={this.updateDropdownTop}>
          <div className='ant-select-selection ant-select-selection--multiple'>
            <div className='ant-select-selection__rendered'>
              <div className='ant-select-selection__placeholder' onClick={this.showDropdown}>请选择</div>
              <ul>
                { this.renderChoice() }
              </ul>
            </div>
          </div>
        </div>
        <div
          className='select-dropdown'
          style={{
            display: dropdownVisible ? 'block' : 'none',
            top: dropdownTop + 8 + 'px'
          }}>
          <ul className='ant-select-dropdown-menu'>
            { this.renderSelection() }
          </ul>
        </div>
      </div>
    )
  }
}

export default MultipleSelect
