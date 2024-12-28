import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SizeConverterForm from './SizeConverterForm';

const SizeConverter = () => {
  const sizeData = [
    {
      eu: '32',
      uk: '4',
      us: '0',
      it: '36',
      fr: '34',
      rus: '38',
      china: 'XS/155/80A',
      aus: '4',
      bust: '78-81',
      waist: '60-63',
      hips: '84-87'
    },
    {
      eu: '34',
      uk: '6',
      us: '2',
      it: '38',
      fr: '36',
      rus: '40',
      china: 'S/160/82A',
      aus: '6',
      bust: '82-85',
      waist: '64-67',
      hips: '88-91'
    },
    {
      eu: '36',
      uk: '8',
      us: '4',
      it: '40',
      fr: '38',
      rus: '42',
      china: 'S/165/84A',
      aus: '8',
      bust: '86-89',
      waist: '68-71',
      hips: '92-95'
    },
    {
      eu: '38',
      uk: '10',
      us: '6',
      it: '42',
      fr: '40',
      rus: '44',
      china: 'M/170/86A',
      aus: '10',
      bust: '90-93',
      waist: '72-75',
      hips: '96-99'
    },
    {
      eu: '40',
      uk: '12',
      us: '8',
      it: '44',
      fr: '42',
      rus: '46',
      china: 'L/175/88A',
      aus: '12',
      bust: '94-97',
      waist: '76-79',
      hips: '100-103'
    },
    {
      eu: '42',
      uk: '14',
      us: '10',
      it: '46',
      fr: '44',
      rus: '48',
      china: 'L/175/90A',
      aus: '14',
      bust: '98-101',
      waist: '80-83',
      hips: '104-107'
    },
    {
      eu: '44',
      uk: '16',
      us: '12',
      it: '48',
      fr: '46',
      rus: '50',
      china: 'XL/180/92A',
      aus: '16',
      bust: '102-105',
      waist: '84-87',
      hips: '108-111'
    }
  ];

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleMeasurements = (data: { bust: string; waist: string; hips: string }) => {
    const bust = parseInt(data.bust);
    const waist = parseInt(data.waist);
    const hips = parseInt(data.hips);

    const findBestMatch = () => {
      return sizeData.findIndex(size => {
        const [minBust, maxBust] = size.bust.split('-').map(Number);
        const [minWaist, maxWaist] = size.waist.split('-').map(Number);
        const [minHips, maxHips] = size.hips.split('-').map(Number);

        return (
          bust >= minBust && bust <= maxBust &&
          waist >= minWaist && waist <= maxWaist &&
          hips >= minHips && hips <= maxHips
        );
      });
    };

    const bestMatch = findBestMatch();
    setSelectedSize(bestMatch >= 0 ? bestMatch : null);
  };

  return (
    <div className="space-y-6">
      <SizeConverterForm onSubmit={handleMeasurements} />
      
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
                <td className="p-2 border text-center">{size.bust}</td>
                <td className="p-2 border text-center">{size.waist}</td>
                <td className="p-2 border text-center">{size.hips}</td>
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

export default SizeConverter;
