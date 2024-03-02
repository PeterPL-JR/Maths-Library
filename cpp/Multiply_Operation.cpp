#include <cstdarg>

#include "Multiply_Operation.h"

Multiply::Multiply(int factors, ...) {
	va_list vlist;

	va_start(vlist, factors);
	for (int i = 0; i < factors; i++) {
		this->factors.push_back(va_arg(vlist, Calculable));
	}
	va_end(vlist);
}

std::vector<Calculable> Multiply::get_factors() {
	return factors;
}