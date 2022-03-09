import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Doughnut2D, DynamicPie2D } from './Chart/DynamicChartWithNoSSR';

const Repos = () => {
  const { repos } = useContext(AppContext);
  let languages: any = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a: { value: number }, b: { value: number }) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const chartData = [
    {
      label: 'HTML',
      value: '290',
    },
    {
      label: 'CSS',
      value: '260',
    },
    {
      label: 'JavaScript',
      value: '180',
    },
  ];

  return (
    <section>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[2fr_3fr] gap-6 px-6 lg:px-0 mb-3 lg:mb-8">
        {/* <DynamicExampleChart data={chartData} /> */}
        <DynamicPie2D data={languages} />
        <div></div>
      </div>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[2fr_3fr] gap-6 px-6 lg:px-0 mb-8">
        <Doughnut2D data={chartData} />
        <div></div>
      </div>
    </section>
  );
};

export default Repos;
