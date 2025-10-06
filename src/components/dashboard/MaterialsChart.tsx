import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Micro...", time: 30 },
  { name: "OLED T...", time: 27 },
  { name: "Blueto...", time: 27 },
  { name: "Sound ...", time: 27 },
  { name: "Monito...", time: 26 },
  { name: "Home T...", time: 26 },
  { name: "PC Mon...", time: 25 },
  { name: "DvdBen...", time: 25 },
  { name: "Arcon", time: 24 },
  { name: "LCD Tv", time: 24 },
];

export const MaterialsChart = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-medium">Materiais</CardTitle>
          <p className="text-sm text-muted-foreground">Materiais x Tempo de Operação</p>
        </div>
        <div className="rounded-md bg-destructive/20 px-3 py-1 text-xs font-medium text-destructive">
          TOP 10
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
                <Cell key={`cell-${index}`} fill="hsl(var(--destructive))" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-10 gap-1 text-xs text-muted-foreground">
          {data.map((item) => (
            <div key={item.name} className="text-center">
              <div className="font-medium text-destructive">{item.time}min</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
