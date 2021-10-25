import { PieChart, PieArcSeries } from 'reaviz';
import theme from '../../theme';

export const Chart1 = () => {
  const height = 280;
  const width = 280;
  const padAngle = 0.1;
  const padRadius = 20;
  const cornerRadius = 3;
  const data = [
    { key: 'Datenanalyse', data: 3 },
    { key: 'Datenwissenschaft', data: 7 },
    { key: 'Datenarchitektur', data: 10 },
    { key: 'Journalismus', data: 3 },
    { key: 'Datenlehre', data: 5 },
    { key: 'Datenstudie', data: 6 },
    { key: 'Weiteres', data: 7 },
    { key: 'Datenvisualisierung', data: 14 },
    { key: 'Datenforschung', data: 14 },
    { key: 'Internet Of Things', data: 31 },
  ];

  return (
    <section className="justify-between flex flex-wrap gap-8 px-8 sm:px-12 md:px-16 lg:px-20 my-2 sm:my-4 md:my-6 lg:my-8 bg-white-dot-pattern relative py-10 sm:py-12 md:py-14 lg:py-16 mx-auto max-w-5xl lg:w-[120%] lg:ml-[-10%]">
      <ul className="max-w-[200px] flex flex-col gap-2 text-sm justify-center">
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#1E1A5A] inline-block" />
          Internet Of Things
        </li>
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#332F66] inline-block" />
          Datenforschung
        </li>
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#4A4878] inline-block" />
          Datenvisualisierung
        </li>
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#636188] inline-block" />
          Weiteres
        </li>
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#787696] inline-block" />
          Datenstudie
        </li>
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#9695AE] inline-block" />
          Datenlehre
        </li>
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#B4B4C7] inline-block" />
          Journalismus
        </li>
      </ul>
      <div className="order-first lg:order-none">
        <PieChart
          width={width}
          height={height}
          data={data}
          series={
            <PieArcSeries
              cornerRadius={cornerRadius}
              padAngle={padAngle}
              padRadius={padRadius}
              doughnut={true}
              label={null}
              colorScheme={theme.chartColorScheme}
            />
          }
        />
      </div>
      <ul className="max-w-[200px] flex flex-col gap-2 text-sm justify-center">
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#8330FF] inline-block" />
          Datenarchitektur
        </li>
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#46ECA1] inline-block" />
          Datenwissenschaft
        </li>
        <li className="pl-6 relative">
          <span className="absolute left-0 top-0.5 w-4 h-4 rounded bg-[#0000C2] inline-block" />
          Datenanalyse
        </li>
      </ul>
    </section>
  );
};
