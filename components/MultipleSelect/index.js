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
      dropdownTop: 34,
      filterList: null
    }
  }

  componentDidMount () {
    const select = this.select

    document.addEventListener('click', (e) => {
      const isSelectChild = this.containsNode(select, e.target)
      if (!isSelectChild) {
        this.hideDropdown()
      }
    })

    // document.querySelectorAll('.multiple-select').forEach(item => {
    //   item.addEventListener('click', (e) => {
    //     e.stopPropagation()
    //   })
    // })
  }

  containsNode (parent, node) {
    if (document.documentElement.contains) {
      return parent !== node && parent.contains(node)
    }

    while (node) {
      if (node === parent) {
        return true
      }
      node = node.parentNode
    }
    return false
  }

  showDropdown = () => {
    this.setState({ dropdownVisible: true })
  }

  hideDropdown = () => {
    this.setState({ dropdownVisible: false })
  }

  // updateDropdownTop = (select) => {
  //   const dropdownTop = select ? select.clientHeight : 34

  //   if (dropdownTop !== this.state.dropdownTop) {
  //     this.setState({ dropdownTop })
  //   }
  // }

  updateSearchWidth = (e) => {
    const input = e.target
    const text = input.value
    const searchFieldMirror = input.parentNode.getElementsByClassName('ant-select-search__field__mirror')[0]
    searchFieldMirror.innerHTML = text ? text : '&nbsp;'
    const width = searchFieldMirror.offsetWidth

    input.style.width = width + 10 + 'px'
  }

  addChoice = (label, value) => {
    const { choiceValues, choiceLabels } = this.state
    choiceLabels.push(label)
    choiceValues.push(value)

    this.setState({ choiceLabels, choiceValues, filterList: null })
    this.select.getElementsByClassName('ant-select-search__field')[0].value = ''
  }

  removeChoice = (index) => {
    const { choiceValues, choiceLabels } = this.state
    choiceValues.splice(index, 1)
    choiceLabels.splice(index, 1)

    setTimeout(() => {
      this.setState({ choiceLabels, choiceValues, filterList: null })
    }, 0)
    this.select.getElementsByClassName('ant-select-search__field')[0].value = ''
  }

  renderChoice = () => {
    const { choiceLabels } = this.state

    return choiceLabels.map((item, index) => (
      <li className='ant-select-selection__choice' key={item}>
        <div className='ant-select-selection__choice__content'>{ item }</div>
        <span className='ant-select-selection__choice__remove' onClick={(e) => this.removeChoice(index) }></span>
      </li>
    ))
  }

  renderSelection = (filterList) => {
    const { list, labelInValue, fields } = this.props
    const { choiceLabels, choiceValues } = this.state
    const { labelField, valueField } = fields

    return (filterList || list).map((item, index) => {
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

  handleSelectClick = (e) => {
    this.showDropdown()
    this.select.querySelector('.ant-select-search__field').focus()
  }

  handleSelectChange = (e) => {
    const text = e.target.value
    const { list, labelInValue } = this.props
    const filterList = []

    list.forEach(item => {
      const label = labelInValue ? item : item[labelField]
      if (label.indexOf(text) !== -1) {
        filterList.push(item)
      }
    })

    this.setState({ filterList })
  }

  render () {
    const { dropdownVisible, filterList } = this.state

    return (
      <div className='multiple-select'
        ref={ select => this.select = select }>
        <div className='ant-select ant-select-enabled' onClick={this.handleSelectClick}>
          <div className='ant-select-selection ant-select-selection--multiple'>
            <div className='ant-select-selection__rendered'>
              <div className='ant-select-selection__placeholder'>请选择</div>
              <ul className='ant-select-selection__choice_list'>
                { this.renderChoice() }
                <li className="ant-select-search ant-select-search--inline">
                  <div className="ant-select-search__field__wrap">
                    <input
                      autoComplete="off"
                      className="ant-select-search__field"
                      onChange={this.handleSelectChange}
                      onKeyUp={this.updateSearchWidth} />
                    <span className="ant-select-search__field__mirror">&nbsp;</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className='select-dropdown'
          style={{ display: dropdownVisible ? 'block' : 'none' }}>
          <ul className='ant-select-dropdown-menu'>
            { this.renderSelection(filterList) }
          </ul>
        </div>
      </div>
    )
  }
}

export default MultipleSelect
