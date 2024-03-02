#include <string>

#include "Fraction.h"
#include "Integer_Number.h"

Fraction::Fraction(double n) : Fraction(Fraction::get(n)) {
}
Fraction::Fraction(Rational_Number n) : Fraction(n.get_numerator(), n.get_denominator()) {
}

double Fraction::get() {
	return Number::get();
}

Fraction Fraction::reduce(Fraction f) {
	return (Fraction)Rational_Number::reduce(f);
}

Fraction Fraction::common_denominator(Fraction f1, Fraction f2) {
	return (Fraction)Rational_Number::common_denominator(f1, f2);
}

Fraction Fraction::get(double n) {
	double numerator = n;
	double denominator = 1;

	do {
		numerator *= 10;
		denominator *= 10;
	} while (!Integer_Number::is(numerator));

	if (denominator < 0) {
		numerator *= -1;
		denominator *= -1;
	}
	return Fraction::reduce(Fraction((int)numerator, (unsigned int)denominator));
}

std::ostream& operator<<(std::ostream& out, Fraction f) {
	out << f.decimal_form();
	return out;
}

std::string Fraction::simple_form() {
	if (Integer_Number::is(n)) return std::to_string((int)n);
	else return std::to_string(get_numerator()) + "/" + std::to_string(get_denominator());
}
std::string Fraction::decimal_form() {
	return to_string();
}