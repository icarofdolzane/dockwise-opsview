import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Carreta", value: 282, color: "hsl(var(--primary))" },
  { name: "Contêiner", value: 0, color: "hsl(var(--muted))" },
  { name: "Caminhão", value: 234, color: "hsl(var(--secondary))" },
  { name: "Automóvel", value: 11, color: "hsl(217 91% 60%)" },
];

export const VehicleTypesChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-medium">Tipos de veículo</CardTitle>
        </div>
        <div className="text-xs text-muted-foreground">
          Total de veículos: <span className="font-medium text-foreground">{total}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30 }}>
            <XAxis type="number" hide />
            <YAxis 
              type="category" 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 13 }}
              axisLine={false}
              tickLine={false}
              width={80}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={35}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
