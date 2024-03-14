import { useSelector } from 'react-redux';

export default function StatsScreen() {
  const stats = useSelector((state) => state.clothes.combinedStats);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">Stats</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl">
          Coquette:
          {' '}
          <span className="font-bold">{stats.coquette}</span>
        </p>
        <p className="text-xl">
          Casual:
          {' '}
          <span className="font-bold">{stats.casual}</span>
        </p>
        <p className="text-xl">
          Formal:
          {' '}
          <span className="font-bold">{stats.formal}</span>
        </p>
      </div>
    </div>
  );
}
