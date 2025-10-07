import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, LabelList } from "recharts";

const data = [
  { 
    name: "Label Press Ind.", 
    Carreta: 85, 
    Caminhão: 45, 
    Automóvel: 3,
    total: 133
  },
  { 
    name: "Weg Amazonia", 
    Carreta: 78, 
    Caminhão: 52, 
    Automóvel: 2,
    total: 132
  },
  { 
    name: "Alpha Assembly", 
    Carreta: 72, 
    Caminhão: 48, 
    Automóvel: 4,
    total: 124
  },
  { 
    name: "Prestige Da...", 
    Carreta: 65, 
    Caminhão: 41, 
    Automóvel: 1,
    total: 107
  },
  { 
    name: "Placibras Da...", 
    Carreta: 58, 
    Caminhão: 38, 
    Automóvel: 1,
    total: 97
  },
];

const colors = {
  Carreta: "hsl(var(--primary))",
  Caminhão: "hsl(var(--secondary))",
  Automóvel: "hsl(217 91% 60%)",
};

const renderCustomLabel = (props: any) => {
  const { x, y, width, value, index } = props;
  
  if (!data[index]) return null;
  
  // Renderizar apenas no último segmento (Automóvel)
  if (value === data[index].Automóvel) {
    return (
      <text 
        x={x + width / 2} 
        y={y - 8} 
        fill="hsl(var(--foreground))" 
        textAnchor="middle"
        fontSize={13}
        fontWeight={600}
      >
        {data[index].total}
      </text>
    );
  }
  return null;
};

export const VehiclesBySupplierChart = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-medium">Tipos de Veículos por Fornecedor</CardTitle>
          <p className="text-sm text-muted-foreground">Composição dos veículos que operaram em docas por fornecedor</p>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart 
            data={data} 
            margin={{ top: 30, right: 10, left: 0, bottom: 0 }}
          >
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
              cursor={{ fill: 'hsl(var(--muted) / 0.3)' }}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '10px',
                fontSize: '13px'
              }}
              iconType="circle"
              align="center"
              verticalAlign="top"
            />
            <Bar dataKey="Carreta" fill={colors.Carreta} stackId="a" radius={[0, 0, 0, 0]} />
            <Bar dataKey="Caminhão" fill={colors.Caminhão} stackId="a" radius={[0, 0, 0, 0]} />
            <Bar dataKey="Automóvel" fill={colors.Automóvel} stackId="a" radius={[4, 4, 0, 0]}>
              <LabelList content={renderCustomLabel} position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
