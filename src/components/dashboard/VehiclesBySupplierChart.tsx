import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, LabelList } from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const allData = [
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
  { 
    name: "Beta Industries", 
    Carreta: 54, 
    Caminhão: 35, 
    Automóvel: 2,
    total: 91
  },
  { 
    name: "Gamma Logistics", 
    Carreta: 48, 
    Caminhão: 32, 
    Automóvel: 1,
    total: 81
  },
  { 
    name: "Delta Transport", 
    Carreta: 45, 
    Caminhão: 28, 
    Automóvel: 3,
    total: 76
  },
  { 
    name: "Epsilon Supply", 
    Carreta: 42, 
    Caminhão: 25, 
    Automóvel: 1,
    total: 68
  },
  { 
    name: "Zeta Materials", 
    Carreta: 38, 
    Caminhão: 22, 
    Automóvel: 2,
    total: 62
  },
  { 
    name: "Eta Distribution", 
    Carreta: 35, 
    Caminhão: 20, 
    Automóvel: 1,
    total: 56
  },
  { 
    name: "Theta Cargo", 
    Carreta: 32, 
    Caminhão: 18, 
    Automóvel: 2,
    total: 52
  },
  { 
    name: "Iota Shipping", 
    Carreta: 28, 
    Caminhão: 16, 
    Automóvel: 1,
    total: 45
  },
  { 
    name: "Kappa Freight", 
    Carreta: 25, 
    Caminhão: 15, 
    Automóvel: 2,
    total: 42
  },
  { 
    name: "Lambda Express", 
    Carreta: 22, 
    Caminhão: 12, 
    Automóvel: 1,
    total: 35
  },
  { 
    name: "Mu Transport", 
    Carreta: 18, 
    Caminhão: 10, 
    Automóvel: 1,
    total: 29
  },
  { 
    name: "Nu Logistics", 
    Carreta: 15, 
    Caminhão: 8, 
    Automóvel: 2,
    total: 25
  },
  { 
    name: "Xi Supply Chain", 
    Carreta: 12, 
    Caminhão: 7, 
    Automóvel: 1,
    total: 20
  },
  { 
    name: "Omicron Dist.", 
    Carreta: 10, 
    Caminhão: 5, 
    Automóvel: 1,
    total: 16
  },
  { 
    name: "Pi Carriers", 
    Carreta: 8, 
    Caminhão: 4, 
    Automóvel: 1,
    total: 13
  },
];

const colors = {
  Carreta: "hsl(var(--primary))",
  Caminhão: "hsl(var(--secondary))",
  Automóvel: "hsl(217 91% 60%)",
};

const renderLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  
  if (!value || value < 5) return null; // Não mostrar labels muito pequenos
  
  return (
    <text 
      x={x + width / 2} 
      y={y + height / 2} 
      fill="hsl(var(--background))" 
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={12}
      fontWeight={600}
    >
      {value}
    </text>
  );
};

export const VehiclesBySupplierChart = () => {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? allData : allData.slice(0, 5);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-medium">Tipos de Veículos por Fornecedor</CardTitle>
          <p className="text-sm text-muted-foreground">Composição dos veículos que operaram em docas por fornecedor</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAll(!showAll)}
          className="text-xs"
        >
          {showAll ? "Top 5" : "Ver Todos (20)"}
        </Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={showAll ? 500 : 280}>
          <BarChart 
            data={displayData} 
            margin={{ top: 30, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              angle={showAll ? -45 : 0}
              textAnchor={showAll ? "end" : "middle"}
              height={showAll ? 100 : 30}
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
            <Bar dataKey="Carreta" fill={colors.Carreta} stackId="a" radius={[0, 0, 0, 0]}>
              <LabelList content={renderLabel} position="inside" />
            </Bar>
            <Bar dataKey="Caminhão" fill={colors.Caminhão} stackId="a" radius={[0, 0, 0, 0]}>
              <LabelList content={renderLabel} position="inside" />
            </Bar>
            <Bar dataKey="Automóvel" fill={colors.Automóvel} stackId="a" radius={[4, 4, 0, 0]}>
              <LabelList content={renderLabel} position="inside" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
