import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Dentro do KPI", value: 1734, color: "hsl(var(--accent))" },
  { name: "Fora do KPI", value: 362, color: "hsl(var(--secondary))" },
];

export const FactoryCard = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium text-center">Fábrica 06</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative mb-6">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={95}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-sm text-muted-foreground">Total de docas</div>
            <div className="text-4xl font-bold">{total}</div>
          </div>
        </div>

        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: data[0].color }} />
              <span className="text-sm">Ocupada &lt; 30min</span>
            </div>
            <span className="font-medium">{data[0].value} docas</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: data[1].color }} />
              <span className="text-sm">Ocupada &gt; 30min</span>
            </div>
            <span className="font-medium">{data[1].value} docas</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
