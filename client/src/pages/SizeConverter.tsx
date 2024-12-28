import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import WomensSizeConverter from "@/components/size/WomensSizeConverter";
import MensSizeConverter from "@/components/size/MensSizeConverter";
import MeasurementGuide from "@/components/size/MeasurementGuide";

const SizeConverter = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Интеллектуальный конвертер размеров одежды
            </CardTitle>
          </CardHeader>
          <Tabs defaultValue="women" className="p-4">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="women">Женская одежда</TabsTrigger>
              <TabsTrigger value="men">Мужская одежда</TabsTrigger>
            </TabsList>
            <TabsContent value="women">
              <WomensSizeConverter />
            </TabsContent>
            <TabsContent value="men">
              <MensSizeConverter />
            </TabsContent>
          </Tabs>
          <MeasurementGuide />
        </Card>
      </div>
    </div>
  );
};

export default SizeConverter;
