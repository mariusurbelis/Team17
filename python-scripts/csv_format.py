file = open("hospital_costs.csv")

GPD_file = open("GPDs.csv", 'w')
provider_file = open("providers.csv", 'w')
payments_file = open("payments.csv", 'w')

first_loop = True

count = 0

for line in file:
    count = count + 1
    values = line.split(",")

    GPD = values[0].split(" - ")
    payments = []

    for i in range(0, 4):
        payments.append(values[8])
        del values[8]

    if first_loop:
        first_loop = False
        GPD.insert(0, "GPD ID")
    GPD[1] = GPD[1] + "\n"
    values[7] = values[7] + "\n"
    payments[3] = payments[3][:-1]
    payments.append(GPD[0])
    payments.append(values[1])
    payments[5] = payments[5] + '\n'


    provider_file.write(",".join(values[1:]))
    GPD_file.write(",".join(GPD))
    payments_file.write(",".join(payments))

