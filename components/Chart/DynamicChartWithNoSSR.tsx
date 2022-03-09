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

export const Column2D = dynamic(() => import('./Column2D'), {
  ssr: false,
});

export const Bar2D = dynamic(() => import('./Bar2D'), {
  ssr: false,
});
