import RText from '@/components/constants/RighteousText';
import { GalleryIndex } from './_index';
import { Metadata } from 'next';
import { fetchGallery } from '@/sanity/queries/gallery';

export const metadata: Metadata = {
   title: 'RCA Gallery',
   description: 'View the gallery of the Rwanda Coding Academy',
};

const GalleryPage = async () => {
   const gallery = await fetchGallery();

   return (
      <>
         <div className=" w-[80%] ">
            <RText className="text-2xl">RCA Gallery</RText>
            <GalleryIndex gallery={gallery} />
         </div>
      </>
   );
};

export default GalleryPage;
