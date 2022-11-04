import { add, sub } from 'date-fns';
import * as React from 'react';
import { DateRange } from 'react-day-picker';
import { DayPicker } from './day-picker';

function App() {
  const [selected, setSelected] = React.useState<Date | undefined>(undefined);
  const [multipleSelected, setMultipleSelected] = React.useState<
    Array<Date> | undefined
  >([]);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    undefined
  );

  return (
    <main className="max-w-screen-2xl mx-auto p-3">
      <h1 className="text-5xl font-extrabold text-center mb-8">
        DayPicker TailwindCSS examples
      </h1>
      <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-around gap-12">
        <section className="flex items-center gap-3">
          <h2 className="text-xl w-36 text-right font-bold text-gray-600 ">
            Single
          </h2>
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </section>
        <section className="flex items-center gap-3">
          <h2 className="text-xl w-36 text-right font-bold text-gray-600 ">
            Multiple
          </h2>
          <DayPicker
            mode="multiple"
            selected={multipleSelected}
            onSelect={setMultipleSelected}
          />
        </section>
        <section className="flex items-center gap-3">
          <h2 className="text-xl w-36 text-right font-bold text-gray-600 ">
            Range
          </h2>
          <DayPicker
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
          />
        </section>
        <section className="flex items-center gap-3">
          <h2 className="text-xl w-36 text-right font-bold text-gray-600 ">
            Single with Min and Max
          </h2>
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              disabled={[{ before: oneWeekBefore }, { after: oneWeekLater }]}
            />
          </div>
        </section>
        <section className="flex items-center gap-3">
          <h2 className="text-xl w-36 text-right font-bold text-gray-600 ">
            Single with Outside Days
          </h2>
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              showOutsideDays
              disabled={[(date) => date.getDay() === 6 || date.getDay() === 0]}
            />
          </div>
        </section>
        <section className="flex items-center gap-3">
          <h2 className="text-xl w-36 text-right font-bold text-gray-600 ">
            Show Two Months
          </h2>
          <div>
            <DayPicker
              mode="single"
              numberOfMonths={2}
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </section>
        <section className="flex items-center gap-3">
          <h2 className="text-xl w-36 text-right font-bold text-gray-600 ">
            Range Show Two Months
          </h2>
          <div>
            <DayPicker
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

const oneWeekLater = add(new Date(), { days: 7 });
const oneWeekBefore = sub(new Date(), { days: 7 });

export default App;
