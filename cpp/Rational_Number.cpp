#include <string>

#include "Rational_Number.h"
#include "Integer_Number.h"

int Rational_Number::get_numerator() {
	return numerator;
}
int Rational_Number::get_denominator() {
	return denominator;
}

Rational_Number Rational_Number::operator+(Rational_Number n) {
	int numerator = this->numerator * n.denominator + n.numerator * this->denominator;
	int denominator = this->denominator * n.denominator;
	return Rational_Number::reduce(Rational_Number(numerator, denominator));
}
Rational_Number Rational_Number::operator-(Rational_Number n) {
	return *this + n.additive_inverse();
}
Rational_Number Rational_Number::operator*(Rational_Number n) {
	return Rational_Number::reduce(Rational_Number(numerator * n.numerator, n.denominator * denominator));
}
Rational_Number Rational_Number::operator/(Rational_Number n) {
	return *this * n.multiplicative_inverse();
}

Rational_Number Rational_Number::multiplicative_inverse() {
	return Rational_Number(denominator, numerator);
}
Rational_Number Rational_Number::additive_inverse() {
	return *this * Integer_Number(-1);
}

bool Rational_Number::operator==(Rational_Number n) {
	Rational_Number n1 = Rational_Number::reduce(n);
	return this->get_numerator() == n1.get_numerator() && this->get_denominator() == n1.get_denominator();
}
bool Rational_Number::operator!=(Rational_Number n) {
	return !(*this == n);
}
bool Rational_Number::operator>(Rational_Number n) {
	Rational_Number n1 = Rational_Number::common_denominator(*this, n);
	Rational_Number n2 = Rational_Number::common_denominator(n, *this);

	return n1.get_numerator() > n2.get_numerator();
}
bool Rational_Number::operator<(Rational_Number n) {
	return !(*this >= n);
}
bool Rational_Number::operator>=(Rational_Number n) {
	return *this > n || *this == n;
}
bool Rational_Number::operator<=(Rational_Number n) {
	return !(*this > n);
}

std::string Rational_Number::to_string() {
	double n = (double)get_numerator() / (double)get_denominator();

	if (Integer_Number::is(n)) return std::to_string((int)n);
	else return std::to_string(n);
}
std::ostream& operator<<(std::ostream& out, Rational_Number n) {
	out << n.to_string();
	return out;
}

Rational_Number Rational_Number::reduce(Rational_Number n) {
	int gcd = Number::GCD(n.get_numerator(), n.get_denominator());

	int numerator = n.get_numerator() / gcd;
	int denominator = n.get_denominator() / gcd;

	return Rational_Number(numerator, denominator);
}
Rational_Number Rational_Number::common_denominator(Rational_Number n1, Rational_Number n2) {
	int lcm = Number::LCM(n1.get_denominator(), n2.get_denominator());
	int n = n1.get_numerator() * lcm / n1.get_denominator();
	return Rational_Number(n, lcm);
}