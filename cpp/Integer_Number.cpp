#include <string>

#include "Integer_Number.h"

Integer_Number::Integer_Number(double n) : Integer_Number((int)n) {
}

bool Integer_Number::is(double n) {
	return n - (int)n == 0;
}

std::string Integer_Number::to_string() {
	return std::to_string((int)n);
}
std::ostream& operator<<(std::ostream& out, Integer_Number n) {
	out << n.to_string();
	return out;
}