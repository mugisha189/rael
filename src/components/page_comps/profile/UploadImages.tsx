import MainModal from '@/components/shared/MainModal';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ActionIcon, Button, Progress } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ImageUploadArea from './ImageUploadArea';
import { useEffect, useState } from 'react';
import { addStudentImage, updateProfilePicture } from '@/lib/actions';
import { useAuth } from '@/contexts/AuthProvider';
import { notifications } from '@mantine/notifications';

const UploadImages = () => {
   const { user, getProfile } = useAuth();
   const [opened, { open, close }] = useDisclosure();
   const [loading, setLoading] = useState(false);
   const [selectFiles, setSelectFiles] = useState<File[]>([]);
   const [progress, setProgress] = useState(0);

   const handleFilesSelected = (files: File[]) => {
      console.log('filetype' + ':' + files);
      setSelectFiles(files);
   };

   const handleUpload = async () => {
      if (selectFiles.length === 0 || !user) return;
      setLoading(true);
      try {
         console.log('---user---', user);
         //  const setFiles = new Set(selectFiles.map((file) => JSON.stringify(file)));
         //  const newFiles = Array.from(setFiles).map((file) => JSON.parse(file));
         //  console.log('newFiles', newFiles);
         await Promise.all(
            selectFiles.map(async (file, i) => {
               const res = await addStudentImage(file, { docId: user._id });
               console.log(`res ${i}`, res);
               setProgress((prev) => prev + 1);
            }),
         );
         notifications.show({
            title: 'Profile Picture Updated',
            message: 'Profile Picture Updated Successfully',
            color: 'black',
            icon: <PencilIcon className="w-6 h-6" />,
         });
         getProfile();
         close();
      } catch (error: any) {
         console.log('---errr----', error);
         notifications.show({
            title: 'Error',
            message: error.message ?? 'Profile Picture Update Failed',
            color: 'red',
            icon: <PencilIcon className="w-6 h-6" />,
         });
      }
      setLoading(false);
   };

   useEffect(() => {
      // reset all states
      return () => {
         setSelectFiles([]);
         setProgress(0);
         setLoading(false);
      };
   }, []);

   return (
      <>
         <div
            onClick={open}
            className="  cursor-pointer flex-col gap-2 border-dashed border-slate-600 rounded-md w-full aspect-square border-2 flex items-center justify-center"
         >
            <span>Add More Images</span>
            <PlusIcon className="w-6 h-6" />
         </div>
         <MainModal
            title="Add more images to your profile"
            open={opened}
            onClose={close}
            size="xl"
            padding="lg"
            closeOnClickOutside={false}
         >
            <div className="flex flex-col gap-4 mt-4">
               {loading && (
                  <div className="text-center flex-col flex">
                     Uploading...( {progress} / {selectFiles.length})
                     <Progress value={(progress / selectFiles.length) * 100} striped animate />
                  </div>
               )}
               <ImageUploadArea multiple title="Select Images here" onFilesSelected={handleFilesSelected} />
               <Button
                  onClick={handleUpload}
                  loading={loading}
                  disabled={loading}
                  className="bg-black text-white dark:bg-white dark:text-black self-center mt-6 "
               >
                  Update
               </Button>
            </div>
         </MainModal>
      </>
   );
};

export default UploadImages;
