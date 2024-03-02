#pragma once
#include <vector>

#include "Calculable.h"

class Sum
{
public:
	Sum(int elements, ...);

	std::vector<Calculable> get_elements();

private:
	std::vector<Calculable> elements;
};