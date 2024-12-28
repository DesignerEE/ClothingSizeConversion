import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ruler, MoveVertical, Crosshair } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MeasurementGuide = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl">Руководство по измерению</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Crosshair className="h-6 w-6 mt-1 text-blue-500" />
              <div>
                <h4 className="font-semibold mb-2">Обхват груди</h4>
                <p className="text-sm text-gray-600">
                  Измерьте по самым выступающим точкам груди, лента должна проходить горизонтально вокруг тела.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MoveVertical className="h-6 w-6 mt-1 text-blue-500" />
              <div>
                <h4 className="font-semibold mb-2">Обхват талии</h4>
                <p className="text-sm text-gray-600">
                  Измерьте самую узкую часть талии, обычно на уровне пупка.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Ruler className="h-6 w-6 mt-1 text-blue-500" />
              <div>
                <h4 className="font-semibold mb-2">Обхват бедер</h4>
                <p className="text-sm text-gray-600">
                  Измерьте по самым выступающим точкам бедер, лента должна проходить параллельно полу.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">Советы по измерению:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>Измерения следует проводить в нижнем белье или облегающей одежде</li>
                <li>Сантиметровая лента должна прилегать к телу, но не стягивать его</li>
                <li>Стойте прямо, в естественной позе</li>
                <li>Для точности повторите каждое измерение дважды</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-200">
            <AspectRatio ratio={3/4} className="h-full">
              <img
                src="/images/measurement-guide.png"
                alt="Иллюстрация правильного измерения"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </AspectRatio>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeasurementGuide;