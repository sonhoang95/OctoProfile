import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Language } from '../type';
import {
  Bar2D,
  Column2D,
  Doughnut2D,
  DynamicPie2D,
} from './Chart/DynamicChartWithNoSSR';

const Repos = () => {
  const { repos } = useContext(AppContext);
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsedLanguages: any = Object.values(languages)
    .sort((a: { value: number }, b: { value: number }) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // most stars per languages
  const mostPopular: any = Object.values(languages)
    .sort((a: { stars: number }, b: { stars: number }) => {
      return b.stars - a.stars;
    })
    .map((item: any) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  let { stars, forks }: any = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars).slice(0, -10).reverse();
  forks = Object.values(forks).slice(0, -10).reverse();

  return (
    <section>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[2fr_3fr] gap-6 px-6 lg:px-0 mb-6 lg:mb-8">
        {/* <DynamicExampleChart data={chartData} /> */}
        <DynamicPie2D data={mostUsedLanguages} />
        <Column2D data={stars} />
      </div>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[2fr_3fr] gap-6 px-6 lg:px-0 mb-16">
        <Doughnut2D data={mostPopular} />
        <Bar2D data={forks} />
      </div>
    </section>
  );
};

export default Repos;
