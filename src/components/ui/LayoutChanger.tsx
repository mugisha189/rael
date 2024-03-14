import { Center, SegmentedControl, Tooltip } from '@mantine/core';
import React from 'react';
import { FaListUl, FaThList } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';

type Layout = 'grid' | 'list' | 'tile';

interface Props {
   onChange: (layout: Layout) => void;
   value?: Layout;
}

const LayoutChanger = ({ value, onChange }: Props) => {
   const [_value, setValue] = React.useState(value ?? 'grid');

   const handleChange = (value: Layout) => {
      setValue(value);
      onChange(value);
   };

   return (
      <SegmentedControl
         data={[
            {
               value: 'grid',
               label: (
                  <Center title="Grid">
                     <FiGrid />
                  </Center>
               ),
            },
            {
               value: 'list',
               label: (
                  <Center title="List">
                     <FaListUl />
                  </Center>
               ),
            },
            { value: 'tile', label: <FaThList title="Tile" /> },
         ]}
         value={_value}
         onChange={handleChange}
      />
   );
};

export default LayoutChanger;
