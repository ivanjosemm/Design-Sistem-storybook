import React from "react";
import Avatar from './Avatar';
import Imagen from "../stories/assets/avatar.jpg";

export default {
  title: 'Design System/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    }
  }
}

const Template = (args) => <Avatar {...args} />

export const small = Template.bind({})
small.args = {
  name: 'User1',
  imageUrl: Imagen,
  size: 'small',
}

export const medium = Template.bind({})
medium.args = {
  name: 'User1',
  imageUrl: Imagen,
  size: 'medium',
}

export const large = Template.bind({})
large.args = {
  name: 'User1',
  imageUrl: Imagen,
  size: 'large',
}
