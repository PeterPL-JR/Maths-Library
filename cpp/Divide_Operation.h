#pragma once
#include "Calculable.h"

class Divide
{
public:
	Divide(Calculable dividend, Calculable dividor) : dividend(dividend), dividor(dividor) {
	}

	Calculable get_dividend();
	Calculable get_dividor();

private:
	Calculable dividend, dividor;
};