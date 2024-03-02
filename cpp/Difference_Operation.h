#pragma once
#include "Calculable.h"

class Difference
{
public:
	Difference(Calculable minuend, Calculable subtrahend) : minuend(minuend), subtrahend(subtrahend) {
	}

	Calculable get_minuend();
	Calculable get_subtrahend();

private:
	Calculable minuend, subtrahend;
};