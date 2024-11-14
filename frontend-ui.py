import sys

# Sample crime data to simulate pulling data from a database or API
crime_data = [
    {"id": 1, "location": "Maryville University", "type": "Assault", "date": "2024-10-15"},
    {"id": 2, "location": "Central West End", "type": "Theft", "date": "2024-11-10"},
    {"id": 3, "location": "Forest Park", "type": "Robbery", "date": "2024-11-12"},
    {"id": 4, "location": "Downtown", "type": "Assault", "date": "2024-11-13"},
]

# Display main menu
def main_menu():
    print("Welcome to Crime Tracker")
    print("1. View Crime Data")
    print("2. Filter by Crime Type")
    print("3. Search by Location")
    print("4. Exit")
    choice = input("Select an option: ")
    return choice

# Display crime data
def view_crime_data():
    print("\nCrime Data:")
    for crime in crime_data:
        print(f"ID: {crime['id']}, Location: {crime['location']}, Type: {crime['type']}, Date: {crime['date']}")
    print()

# Filter crimes by type
def filter_by_crime_type():
    crime_type = input("\nEnter crime type to filter (e.g., Assault, Theft): ").capitalize()
    print(f"\nFiltering by crime type: {crime_type}")
    filtered_data = [crime for crime in crime_data if crime['type'] == crime_type]
    if filtered_data:
        for crime in filtered_data:
            print(f"ID: {crime['id']}, Location: {crime['location']}, Date: {crime['date']}")
    else:
        print("No crimes found of this type.")
    print()

# Search crimes by location
def search_by_location():
    location = input("\nEnter location to search (e.g., Maryville University): ").capitalize()
    print(f"\nSearching for crimes in: {location}")
    location_data = [crime for crime in crime_data if crime['location'] == location]
    if location_data:
        for crime in location_data:
            print(f"ID: {crime['id']}, Type: {crime['type']}, Date: {crime['date']}")
    else:
        print("No crimes found in this location.")
    print()

# Main loop to run the CLI
def main():
    while True:
        choice = main_menu()
        if choice == "1":
            view_crime_data()
        elif choice == "2":
            filter_by_crime_type()
        elif choice == "3":
            search_by_location()
        elif choice == "4":
            print("Exiting Crime Tracker. Goodbye!")
            sys.exit()
        else:
            print("Invalid selection. Please try again.")

# Run the main loop
if __name__ == "__main__":
    main()
