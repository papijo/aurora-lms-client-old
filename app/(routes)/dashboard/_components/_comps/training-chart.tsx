"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", modular: 186, scheduled: 40, unscheduled: 80 },
  { month: "February", modular: 305, scheduled: 45, unscheduled: 200 },
  { month: "March", modular: 237, scheduled: 70, unscheduled: 120 },
  { month: "April", modular: 73, scheduled: 60, unscheduled: 190 },
  { month: "May", modular: 209, scheduled: 30, unscheduled: 130 },
  { month: "June", modular: 214, scheduled: 40, unscheduled: 140 },
];

const chartConfig = {
  modular: {
    label: "Modular",
    color: "#00FFFF",
  },
  scheduled: {
    label: "Scheduled",
    color: "#60a5fa",
  },
  unscheduled: {
    label: "Unscheduled",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function TestChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="modular" fill="var(--color-modular)" radius={4} />
        <Bar dataKey="scheduled" fill="var(--color-scheduled)" radius={4} />
        <Bar dataKey="unscheduled" fill="var(--color-unscheduled)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
