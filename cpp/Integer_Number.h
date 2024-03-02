#pragma once
#include "Rational_Number.h"

class Integer_Number : public Rational_Number
{
public:
	Integer_Number(int n) : Rational_Number(n, 1) {}
	explicit Integer_Number(double);

	static bool is(double);

	std::string to_string();
	friend std::ostream& operator<<(std::ostream&, Integer_Number);
};