import Head from 'next/head';
import TranslucentContainer from '@/components/translucent-box';
import PageTitle from '@/components/page-title';
import UtilityButtons from '@/components/utility-buttons';

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
          <UtilityButtons />
        </TranslucentContainer>
      </main>
    </>
  );
}
