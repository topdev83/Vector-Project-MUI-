import MainCard from 'components/MainCard';
import ApexPieChart from 'sections/charts/ApexPieChart';

export default function ChartCard() {
  return (
    <MainCard border={false} sx={{ background: '#1E1E35', borderRadius: '15px', height: '295px' }}>
      <ApexPieChart />
    </MainCard>
  );
}
