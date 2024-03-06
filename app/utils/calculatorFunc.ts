import { FormDataType } from "@/components/calculator/formItems";

export const calculatorFunc = (data: FormDataType) => {
  const {opf, kind, personale, operations} = data;
  let result: string | null = '';
  if (opf === 'Индивидуальный предприниматель') {
    if (kind === 'УСН Доходы') {
      if (personale === '0 (для ИП)') {
        if(operations === 'до 10') {
          result = '4 500';
        } else if(operations === '10 - 20') {
          result = '5 000';
        } else {
          result = '5 500';
        }
      } else if (personale === '1') {
        if(operations === 'до 10') {
          result = '3 000';
        } else if(operations === '10 - 20') {
          result = '3 500';
        } else {
          result = '4 000';
        }
      } else if (personale === '5 - 10') {
        if(operations === 'до 10') {
          result = '4 000';
        } else if(operations === '10 - 20') {
          result = '4 500';
        } else {
          result = '5 000';
        }
      } else {
        result = '6 000'
      }
    } else if (kind === 'УСН Доходы минус Расходы') {
      if (personale === '0 (для ИП)') {
        if (operations === 'до 10') {
          result = '6 000'
        } else if(operations === '10 - 20') {
          result = '6 500';
        } else {
          result = '7 000';
        }
      } else if (personale === '1') {
        if(operations === 'до 10') {
          result = '3 500';
        } else if(operations === '10 - 20') {
          result = '4 000';
        } else {
          result = '4 500';
        }
      } else if (personale === '5 - 10') {
        if(operations === 'до 10') {
          result = '4 500';
        } else if(operations === '10 - 20') {
          result = '5 500';
        } else {
          result = '5 500';
        }
      } else {
        result = '6 500'
      }
    } else {
      result = '8 000'
    }
  } else {
    if (kind === 'УСН Доходы') {
      if (personale === '0 (для ИП)') {
        result = null
      } else if (personale === '1') {
        if(operations === 'до 10') {
          result = '3 000';
        } else if(operations === '10 - 20') {
          result = '3 500';
        } else {
          result = '4 000';
        }
      } else if (personale === '5 - 10') {
        if(operations === 'до 10') {
          result = '5 000';
        } else if(operations === '10 - 20') {
          result = '5 500';
        } else {
          result = '6 000';
        }
      } else {
        result = '6 000'
      }
    } else if (kind === 'УСН Доходы минус Расходы') {
      if (personale === '0 (для ИП)') {
        result = null
      } else if (personale === '1') {
        if(operations === 'до 10') {
          result = '5 000';
        } else if(operations === '10 - 20') {
          result = '5 500';
        } else {
          result = '6 000';
        }
      } else if (personale === '5 - 10') {
        if(operations === 'до 10') {
          result = '7 000';
        } else if(operations === '10 - 20') {
          result = '7 500';
        } else {
          result = '8 000';
        }
      } else {
        result = '8 500'
      }
    } else {
      if (personale === '1 - 5') {
        result = '10 000'
      } else {
        result = '12 000'
      }
    }
  }
  return result;
};
