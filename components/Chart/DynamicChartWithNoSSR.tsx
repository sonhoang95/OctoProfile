import dynamic from 'next/dynamic';

export const DynamicExampleChart = dynamic(() => import('./ExampleChart'), {
  ssr: false,
});

export const DynamicPie2D = dynamic(() => import('./Pie2D'), {
  ssr: false,
});
