import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Dentro do KPI", value: 189, color: "hsl(var(--accent))" },
  { name: "Fora do KPI", value: 64, color: "hsl(var(--secondary))" },
];

export const LoadsInFactoryCard = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium text-center">Cargas em Fábrica</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-[calc(100%-5rem)]">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              iconType="circle"
              formatter={(value, entry: any) => (
                <span className="text-xs">{value}: {entry.payload.value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <div className="text-3xl font-bold">{total}</div>
          <div className="text-sm text-muted-foreground">Total de cargas</div>
        </div>
      </CardContent>
    </Card>
  );
};
