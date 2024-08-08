import Accounts from "@/components/accounts/Accounts";
import BalanceChart from "@/components/balance-chart/BalanceChart";
import DataCard from "@/components/data-card/DataCard";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

const items: {
  title: string;
  amount: string;
  change: number;
  state: "positive" | 'negative';
}[] = [
  {
    title: "Total Revenue",
    amount: "$124,780",
    change: 20,
    state: "positive",
  },
  {
    title: "Total Expense",
    amount: "-$112,456",
    change: 5,
    state: "negative",
  },
  {
    title: "Total Profit",
    amount: "$20,150",
    change: 12,
    state: "positive",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-7">
      <Hero />
      <section className="flex items-start gap-4">
        <div className="w-2/6">
          <Accounts />
        </div>
        <div className="w-4/6 flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap justify-between">
            {items.map((item) => (
              <DataCard {...item} />
            ))}
          </div>
          <BalanceChart />
        </div>
      </section>
    </main>
  );
}
