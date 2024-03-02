#pragma once
#include <iostream>

#include "Rational_Number.h"

class Fraction : public Rational_Number
{
public:
	Fraction(int numerator, int denominator) : Rational_Number(numerator, denominator) {}
	explicit Fraction(double);
	explicit Fraction(Rational_Number);

	double get();

	static Fraction reduce(Fraction);
	static Fraction common_denominator(Fraction, Fraction);

	std::string simple_form();
	std::string decimal_form();

	friend std::ostream& operator<<(std::ostream&, Fraction);
private:
	static Fraction get(double);
};

