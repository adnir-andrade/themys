import Head from 'next/head';
import Image from 'next/image';
import sortIcon from '../../public/assets/icons/sort.svg';
import addIcon from '../../public/assets/icons/add.svg';
import settingsIcon from '../../public/assets/icons/settings.svg';
import TranslucentContainer from '@/components/translucent-box';
import PageTitle from '@/components/page-title';

export default function SelectCampaign() {
  return (
    <>
      <Head>
        <title>Select Campaign</title>
      </Head>
      <main className="min-[100px]:mx-[5%] sm:mx-[10%]">
        <PageTitle pageTitle="Select a Campaign" />
        <TranslucentContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 min-h-[60vh] justify-center text-center gap-5 mb-3 py-10 px-5">
            <p>Content goes here...</p>
            <p>Content goes here...</p>
            <p>Content goes here...</p>
          </div>
          <div className="flex flex-row justify-evenly pb-5 ">
            {/* TODO: Refactor semi-transp and custom-button to images bellow. Turn then into buttons */}
            <Image
              className="hover:drop-shadow-glow duration-700"
              src={sortIcon}
              alt="sort"
            />
            <Image
              className="hover:drop-shadow-glow duration-700"
              src={addIcon}
              alt="add"
            />
            <Image
              className="hover:drop-shadow-glow duration-700"
              src={settingsIcon}
              alt="settings"
            />
          </div>
        </TranslucentContainer>
      </main>
    </>
  );
}
