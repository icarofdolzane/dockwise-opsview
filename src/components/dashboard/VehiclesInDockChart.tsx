import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Dentro do KPI", value: 1734, color: "hsl(var(--primary))" },
  { name: "Fora do KPI", value: 362, color: "hsl(var(--secondary))" },
];

export const VehiclesInDockChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-medium">Veículos na doca</CardTitle>
        </div>
        <div className="text-xs text-muted-foreground">
          Todas as fábricas
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          <div className="relative">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
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
              <div className="text-sm text-muted-foreground">Total Veículos</div>
              <div className="text-3xl font-bold">{total}</div>
              <div className="text-xs text-muted-foreground">(19min)</div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: data[0].color }} />
                <span className="text-sm">Veículos em doca &lt; 30min</span>
              </div>
              <span className="font-medium">{data[0].value}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: data[1].color }} />
                <span className="text-sm">Veículos em doca &gt; 30min</span>
              </div>
              <span className="font-medium">{data[1].value}</span>
            </div>
            <div className="pt-2 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tempo médio</span>
                <span className="font-medium">19min</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Tempo alvo em doca: <span className="font-medium text-foreground">30min</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
