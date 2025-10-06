import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const InspectionsCard = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium text-center">Inspeções</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-[calc(100%-5rem)]">
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-muted/30">
            <div className="text-5xl font-bold mb-2">2096</div>
            <div className="text-sm text-muted-foreground text-center">Docas ocupadas</div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-muted/30">
            <div className="text-5xl font-bold mb-2">0</div>
            <div className="text-sm text-muted-foreground text-center">Inspeções</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
