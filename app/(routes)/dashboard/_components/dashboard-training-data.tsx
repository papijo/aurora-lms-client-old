import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activities } from "./_comps/activities";
import { TestChart } from "./_comps/training-chart";

export const DashboardTrainingData = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
      <Card className="col-span-5">
        <CardHeader>
          <CardTitle>Department Monthly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <TestChart />
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>
            There has been 6 new activities this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Activities />
        </CardContent>
      </Card>
    </div>
  );
};
