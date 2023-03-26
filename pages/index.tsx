import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { HomeIcon } from '@heroicons/react/20/solid';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import fs from 'fs';

export default function Home({exploreData, cardData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard 
            key = {item.id}
            img = {item.img}
            location = {item.location}
            distance = {item.distance}
            />
            
          ))}
          </div>
          
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll 
          scrollbar-hide p-3 -m-3'>
            {cardData?.map((item) => (
              <MediumCard 
                key={item.img}
                img = {item.img}
                title = {item.title}
              />
            ))}
          </div>

        </section>
        <LargeCard 
          img= 'https://links.papareact.com/4cj'
          title= 'The Greatest Outdoors'
          description= 'Wishlists curated by Airbnb.'
          buttonText= 'Get Inspired'
        />
      </main>
      <Footer />
    </div>
  );
}

 
export async function getStaticProps() {
  const exploreData = fs.readFileSync('public/exploreData.json');
  const json = JSON.parse(exploreData);

  const cardData = fs.readFileSync('public/cardData.json');
  const json2 = JSON.parse(cardData);

  return {
    props:{
      exploreData: json,
      cardData: json2
    }
  }
}



