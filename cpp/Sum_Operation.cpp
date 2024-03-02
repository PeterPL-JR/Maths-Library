#include <cstdarg>

#include "Sum_Operation.h"

Sum::Sum(int elements, ...) {
	va_list vlist;

	va_start(vlist, elements);
	for (int i = 0; i < elements; i++) {
		this->elements.push_back(va_arg(vlist, Calculable));
	}
	va_end(vlist);
}

std::vector<Calculable> Sum::get_elements() {
	return elements;
}