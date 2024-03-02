#pragma once
#include <vector>

#include "Calculable.h"

class Multiply
{
public:
	Multiply(int factors, ...);

	std::vector<Calculable> get_factors();

private:
	std::vector<Calculable> factors;
};