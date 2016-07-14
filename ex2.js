function SumArg()
{
	sum = 0;
	i = 2;
	while (process.argv[i] != null)
	{
		sum = sum + parseInt(process.argv[i]);
		i++;
	}

	console.log("%d", sum);
}

SumArg();