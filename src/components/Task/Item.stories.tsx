import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Item, { ItemProps } from './Item';

export default {
  component: Item,
  title: 'Task/Item',
  args: {
    onComplete: action('완료'),
    onFavorite: action('고정'),
  },
} as Meta;

const Template: Story<ItemProps> = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: { id: 1, title: '제목입니다.', isComplete: false, isFavorite: false },
};

export const Complete = Template.bind({});
Complete.args = {
  task: { id: 1, title: '제목입니다.', isComplete: true, isFavorite: false },
};

export const Favorite = Template.bind({});
Favorite.args = {
  task: { id: 1, title: '제목입니다.', isComplete: false, isFavorite: true },
};
