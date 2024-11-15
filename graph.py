import matplotlib.pyplot as plt
import crime_data as data

data.df.plot(x='key', y='value', kind='bar')
plt.title('Total Number of Crimes by Offense')
plt.xlabel('Offense')
plt.ylabel('Total')
plt.show()