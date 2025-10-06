import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { 
    name: "Label Press", 
    Carreta: 85, 
    Caminhão: 45, 
    Automóvel: 3, 
    Contêiner: 0 
  },
  { 
    name: "Weg Amazonia", 
    Carreta: 78, 
    Caminhão: 52, 
    Automóvel: 2, 
    Contêiner: 0 
  },
  { 
    name: "Alpha Assembly", 
    Carreta: 72, 
    Caminhão: 48, 
    Automóvel: 4, 
    Contêiner: 0 
  },
  { 
    name: "Prestige Dis", 
    Carreta: 65, 
    Caminhão: 41, 
    Automóvel: 1, 
    Contêiner: 0 
  },
  { 
    name: "Plackras Dis", 
    Carreta: 58, 
    Caminhão: 38, 
    Automóvel: 1, 
    Contêiner: 0 
  },
];

const colors = {
  Carreta: "hsl(var(--primary))",
  Caminhão: "hsl(var(--secondary))",
  Automóvel: "hsl(217 91% 60%)",
  Contêiner: "hsl(var(--muted))",
};

export const VehiclesBySupplierChart = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-medium">Tipos de veículos por fornecedor</CardTitle>
          <p className="text-sm text-muted-foreground">Distribuição de tipos de veículos por fornecedor</p>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} margin={{ left: 0, right: 10 }}>
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '20px',
                fontSize: '13px'
              }}
              iconType="circle"
            />
            <Bar dataKey="Carreta" fill={colors.Carreta} radius={[4, 4, 0, 0]} />
            <Bar dataKey="Caminhão" fill={colors.Caminhão} radius={[4, 4, 0, 0]} />
            <Bar dataKey="Automóvel" fill={colors.Automóvel} radius={[4, 4, 0, 0]} />
            <Bar dataKey="Contêiner" fill={colors.Contêiner} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
