import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Globe, Settings, Menu, X, Calendar } from "lucide-react";
import { SupplierChart } from "@/components/dashboard/SupplierChart";
import { MaterialsChart } from "@/components/dashboard/MaterialsChart";
import { VehiclesInDockChart } from "@/components/dashboard/VehiclesInDockChart";
import { VehicleTypesChart } from "@/components/dashboard/VehicleTypesChart";
import { FactoryCard } from "@/components/dashboard/FactoryCard";
import { InspectionsCard } from "@/components/dashboard/InspectionsCard";
import { VehiclesBySupplierChart } from "@/components/dashboard/VehiclesBySupplierChart";

const Index = () => {
  const [factory, setFactory] = useState("FÁBRICA 06");
  const [dateRange, setDateRange] = useState("01/09/2025 - 30/09/2025");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-secondary"></span>
            </Button>
            <div className="text-sm font-medium">admin</div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="border-b border-border bg-card">
        <div className="flex items-center gap-3 px-6 py-4">
          <Select value={factory} onValueChange={setFactory}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FÁBRICA 06">FÁBRICA 06</SelectItem>
              <SelectItem value="FÁBRICA 01">FÁBRICA 01</SelectItem>
              <SelectItem value="FÁBRICA 02">FÁBRICA 02</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{dateRange}</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <X className="h-3 w-3" />
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            Período selecionado | <span className="font-medium text-foreground">{factory}</span>
          </div>

          <div className="ml-auto">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Exportar
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <main className="p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Fornecedor */}
          <div className="col-span-5">
            <SupplierChart />
          </div>

          {/* Tipos de veículo */}
          <div className="col-span-4">
            <VehicleTypesChart />
          </div>

          {/* Fábrica */}
          <div className="col-span-3">
            <FactoryCard />
          </div>

          {/* Materiais */}
          <div className="col-span-5">
            <MaterialsChart />
          </div>

          {/* Veículos na doca */}
          <div className="col-span-4">
            <VehiclesInDockChart />
          </div>

          {/* Inspeções */}
          <div className="col-span-3">
            <InspectionsCard />
          </div>

          {/* Tipos de veículos por fornecedor */}
          <div className="col-span-12">
            <VehiclesBySupplierChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
