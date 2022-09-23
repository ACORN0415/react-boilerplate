import { Meta, Story } from '@storybook/react';
import List, { ListProps } from './List';
import Item from './Item';

export default {
  component: List,
  title: 'Task/List',
  subcomponents: { Item },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: 1, title: '할일_1', isComplete: false, isFavorite: false },
    { id: 2, title: '할일_2.', isComplete: true, isFavorite: false },
    { id: 3, title: '할일_3.', isComplete: false, isFavorite: true },
    { id: 4, title: '할일_4', isComplete: true, isFavorite: true },
  ],
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  tasks: [],
};
