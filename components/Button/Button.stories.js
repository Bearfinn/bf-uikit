import Button from '~/components/Button/Button'

export default {
  component: Button,
  title: 'Button'
}

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />',
});

export const Primary = Template.bind({})
Primary.args = { color: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { color: 'amber' }
