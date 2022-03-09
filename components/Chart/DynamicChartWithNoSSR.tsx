import dynamic from 'next/dynamic';

export const DynamicExampleChart = dynamic(() => import('./ExampleChart'), {
  ssr: false,
});

export const DynamicPie2D = dynamic(() => import('./Pie2D'), {
  ssr: false,
});

export const Doughnut2D = dynamic(() => import('./Doughnut2D'), {
  ssr: false,
});
