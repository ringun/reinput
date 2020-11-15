import pick from '../services/pick'
import { BLUE } from '../services/constants'

export const container = ({ top, translateY, scale }) => ({
  marginLeft: '-100%',
  position: 'absolute',
  top,
  transform: [
    { translateY },
    { scale }
  ],
  width: '200%'
})

export const label = (props = {}) => {
  var color = props.labelColor

  return {
    ...pick(props, [
      'fontFamily',
      'fontSize',
      'fontWeight',
      'paddingLeft',
      'paddingRight'
    ]),
    color,
    paddingLeft: 1, // cursor indicator
    left: '50%',
    top: 0
  }
}
