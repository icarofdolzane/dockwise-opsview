import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Label Press Ind...", time: 32 },
  { name: "Weg Amazonia...", time: 31 },
  { name: "Alpha Assembly...", time: 29 },
  { name: "Prestige Dis...", time: 28 },
  { name: "Plackras Dis...", time: 25 },
];

export const SupplierChart = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-medium">Fornecedor</CardTitle>
          <p className="text-sm text-muted-foreground">Fornecedor x Tempo de Operação</p>
        </div>
        <div className="rounded-md bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
          TOP 5
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Bar dataKey="time" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-between text-xs text-muted-foreground">
          {data.map((item) => (
            <div key={item.name} className="text-center">
              <div className="font-medium text-primary">{item.time}min</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
