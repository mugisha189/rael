import { sanityClient } from '@/sanity/sanity.client';
import { Select } from '@mantine/core';
import React from 'react';

interface Props {
   handleChange?: (e: string) => void;
}

const PromFilter = ({ handleChange }: Props) => {
   const [selectData, setSelectData] = React.useState<any[]>([]);
   const [loading, setLoading] = React.useState(false);

   const getPromData = async () => {
      setLoading(true);
      try {
         const data: any[] = await sanityClient.fetch(`*[_type == 'promotion']`);
         setSelectData(data.map((d) => d.name));
      } catch (error) {
         console.error('Error getting prom data', error);
      }
      setLoading(false);
   };

   React.useEffect(() => {
      getPromData();
   }, []);
   return (
      <div className="flex flex-col">
         <p className="px-1">Filter (Prom): </p>
         <Select
            placeholder="Filter By Promotion"
            disabled={loading}
            data={loading ? ['Loading..'] : selectData}
            searchable
            onChange={handleChange}
         />
      </div>
   );
};

export default PromFilter;