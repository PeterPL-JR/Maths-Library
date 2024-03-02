#pragma once
#include "Real_Number.h"

class Rational_Number : public Real_Number
{
public:
	int get_numerator();
	int get_denominator();

	Rational_Number operator+(Rational_Number);
	Rational_Number operator-(Rational_Number);
	Rational_Number operator*(Rational_Number);
	Rational_Number operator/(Rational_Number);

	Rational_Number multiplicative_inverse();
	Rational_Number additive_inverse();

	bool operator==(Rational_Number);
	bool operator!=(Rational_Number);
	bool operator>(Rational_Number);
	bool operator<(Rational_Number);
	bool operator>=(Rational_Number);
	bool operator<=(Rational_Number);

	std::string to_string();
	friend std::ostream& operator<<(std::ostream&, Rational_Number);
protected:
	const int numerator, denominator;

	Rational_Number(int numerator, int denominator) : Real_Number((double)numerator / (double)denominator), numerator(numerator), denominator(denominator) {}

	static Rational_Number reduce(Rational_Number);
	static Rational_Number common_denominator(Rational_Number, Rational_Number);
};