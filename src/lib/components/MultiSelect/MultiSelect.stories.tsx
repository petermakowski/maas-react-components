import { useState } from "react";

import { Meta } from "@storybook/react";

import {
  MultiSelect,
  MultiSelectItem,
  MultiSelectProps,
} from "@/lib/components/MultiSelect/MultiSelect";

const Template = (props: MultiSelectProps) => {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>(
    props.selectedItems || [],
  );
  return (
    <MultiSelect
      {...props}
      selectedItems={selectedItems}
      onItemsUpdate={setSelectedItems}
    />
  );
};

const meta: Meta<typeof MultiSelect> = {
  title: "components/MultiSelect",
  component: MultiSelect,
  render: Template,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

export const CondensedExample = {
  args: {
    items: Array.from({ length: 10 }, (_, i) => ({
      label: `Item ${i + 1}`,
      value: i + 1,
      selected: true,
    })),
    selectedItems: [
      { label: "Item 1", value: 1 },
      { label: "Item 2", value: 2 },
    ],
    variant: "condensed",
  },
};

export const SearchExample = {
  args: {
    ...CondensedExample.args,
    variant: "search",
    items: [
      ...CondensedExample.args.items.map((item, i) => ({
        ...item,
        group: i % 2 === 0 ? "Group 1" : "Group 2",
      })),
    ],
  },
};

export const WithDisabledItems = {
  args: {
    ...CondensedExample.args,
    disabledItems: [
      { label: "Item 1", value: 1 },
      { label: "Item 2", value: 2 },
    ],
  },
};
