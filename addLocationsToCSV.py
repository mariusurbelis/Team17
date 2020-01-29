import geocoder
import csv

#g = geocoder.komoot("London")

csf = csv.reader(open("providers.csv", "r"))
csw = csv.writer(open("output4.csv", 'w'))
all = []
#x = 0
startpoint = 0
#40002
for row in csf:
    print(row[0])
    try:
        if(int(row[0])>=startpoint):
            g = geocoder.komoot(row[1])
            print(g)
            row.append(g.latlng[0])
            row.append(g.latlng[1])
    except:
        print("EXCEPTION")
        row.append("COULD NOT")
        row.append("FIND LOCATIONS")

    print(row)
    all.append(row)
    csw.writerow(row)
    #if(x>5):
    #    break
    #x+=1

#csf.close()

#f = open("test.txt", "W")
#for r in all:
#    f.write(r)
#f.close()
#csw.writerows(all)
#10114
#40002
