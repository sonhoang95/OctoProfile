import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { DynamicExampleChart } from './Chart';
import { DynamicPie2D } from './Chart/DynamicChartWithNoSSR';

const Repos = () => {
  const { repos } = useContext(AppContext);

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
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[2fr_3fr] gap-6 px-6 lg:px-0">
        {/* <DynamicExampleChart data={chartData} /> */}
        <DynamicPie2D data={chartData} />
      </div>
    </section>
  );
};

export default Repos;
