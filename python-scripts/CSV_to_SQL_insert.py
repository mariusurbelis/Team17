file = open("payments.csv")

insert_file = open("SQL_Inserts.txt", 'w')

for line in file:
    values = line.split(",")

    statement = f"INSERT into Payments (Discharges, CoveredCharges, TotalPayments, MedicarePayments, GPDID, ProviderID)" \
                f" VALUES ({values[0]}, {values[1]}, {values[2]}, {values[3]}, {values[4]}, {values[5][:-1]});\n"

    insert_file.write(statement)