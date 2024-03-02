#pragma once
#include <iostream>
#include <vector>

#include "Calculable.h"

class Number : public Calculable
{
public:
	double get();

	static int GCD(int, int);
	static int LCM(int, int);

	static bool is_prime(int);
	static bool is_composite(int);

	static std::vector<int> prime_factors(int);

	static bool is_even(int);
	static bool is_odd(int);

	static bool is_divisable_by(int, int);
protected:
	const double n;

	Number(double n) : n(n) {}
};