import React from 'react';

import Input from 'components/Input';
import Dropdown from 'components/Dropdown';
import { PlusIc } from 'components/Icons';

const TITLE = {
  label: 'plus',
  icon: PlusIc,
};

const TEST = [
  { label: 'plus', icon: PlusIc },
  { label: 'plus1', icon: PlusIc },
  { label: 'plus2', icon: PlusIc },
];

const AddTaskSection = () => {
  return (
    <div>
      <Input placeholder="Task name" />
      <Input placeholder="Description" />
      <Dropdown title={TITLE} options={TEST} />
    </div>
  );
};

export default AddTaskSection;
