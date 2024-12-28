import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SizeConverterForm from './SizeConverterForm';

const MensSizeConverter = () => {
  const sizeData = [
    {
      eu: '44',
      uk: '34',
      us: '34',
      it: '44',
      fr: '44',
      rus: '44',
      china: '165/84A',
      aus: 'XS',
      chest: '84-87',
      waist: '72-75',
      hips: '88-91',
      neck: '36-37'
    },
    {
      eu: '46',
      uk: '36',
      us: '36',
      it: '46',
      fr: '46',
      rus: '46',
      china: '170/88A',
      aus: 'S',
      chest: '88-91',
      waist: '76-79',
      hips: '92-95',
      neck: '37-38'
    },
    {
      eu: '48',
      uk: '38',
      us: '38',
      it: '48',
      fr: '48',
      rus: '48',
      china: '175/92A',
      aus: 'M',
      chest: '92-95',
      waist: '80-83',
      hips: '96-99',
      neck: '38-39'
    },
    {
      eu: '50',
      uk: '40',
      us: '40',
      it: '50',
      fr: '50',
      rus: '50',
      china: '180/96A',
      aus: 'L',
      chest: '96-99',
      waist: '84-87',
      hips: '100-103',
      neck: '39-40'
    },
    {
      eu: '52',
      uk: '42',
      us: '42',
      it: '52',
      fr: '52',
      rus: '52',
      china: '185/100A',
      aus: 'XL',
      chest: '100-103',
      waist: '88-91',
      hips: '104-107',
      neck: '40-41'
    },
    {
      eu: '54',
      uk: '44',
      us: '44',
      it: '54',
      fr: '54',
      rus: '54',
      china: '190/104A',
      aus: 'XXL',
      chest: '104-107',
      waist: '92-95',
      hips: '108-111',
      neck: '41-42'
    }
  ];

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleMeasurements = (data: { bust: string; waist: string; hips: string; neck?: string }) => {
    const chest = parseInt(data.bust);
    const waist = parseInt(data.waist);
    const hips = parseInt(data.hips);
    const neck = data.neck ? parseInt(data.neck) : null;

    const findBestMatch = () => {
      return sizeData.findIndex(size => {
        const [minChest, maxChest] = size.chest.split('-').map(Number);
        const [minWaist, maxWaist] = size.waist.split('-').map(Number);
        const [minHips, maxHips] = size.hips.split('-').map(Number);
        const [minNeck, maxNeck] = size.neck.split('-').map(Number);

        return (
          chest >= minChest && chest <= maxChest &&
          waist >= minWaist && waist <= maxWaist &&
          hips >= minHips && hips <= maxHips &&
          (!neck || (neck >= minNeck && neck <= maxNeck))
        );
      });
    };

    const bestMatch = findBestMatch();
    setSelectedSize(bestMatch >= 0 ? bestMatch : null);
  };

  return (
    <div className="space-y-6">
      <SizeConverterForm onSubmit={handleMeasurements} includeNeck={true} />
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">EU</th>
              <th className="p-2 border">UK</th>
              <th className="p-2 border">US</th>
              <th className="p-2 border">IT</th>
              <th className="p-2 border">FR</th>
              <th className="p-2 border">RUS</th>
              <th className="p-2 border">China</th>
              <th className="p-2 border">AUS</th>
              <th className="p-2 border">Обхват груди (см)</th>
              <th className="p-2 border">Обхват талии (см)</th>
              <th className="p-2 border">Обхват бедер (см)</th>
              <th className="p-2 border">Обхват шеи (см)</th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map((size, index) => (
              <tr 
                key={index}
                className={`hover:bg-gray-50 cursor-pointer ${
                  selectedSize === index ? 'bg-blue-50' : ''
                }`}
              >
                <td className="p-2 border text-center">{size.eu}</td>
                <td className="p-2 border text-center">{size.uk}</td>
                <td className="p-2 border text-center">{size.us}</td>
                <td className="p-2 border text-center">{size.it}</td>
                <td className="p-2 border text-center">{size.fr}</td>
                <td className="p-2 border text-center">{size.rus}</td>
                <td className="p-2 border text-center">{size.china}</td>
                <td className="p-2 border text-center">{size.aus}</td>
                <td className="p-2 border text-center">{size.chest}</td>
                <td className="p-2 border text-center">{size.waist}</td>
                <td className="p-2 border text-center">{size.hips}</td>
                <td className="p-2 border text-center">{size.neck}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedSize !== null && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Ваш рекомендованный размер:</h3>
              <p>EU: {sizeData[selectedSize].eu}</p>
              <p>RUS: {sizeData[selectedSize].rus}</p>
              <p>US: {sizeData[selectedSize].us}</p>
              <p>UK: {sizeData[selectedSize].uk}</p>
              <p>Китайский размер: {sizeData[selectedSize].china}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MensSizeConverter;
