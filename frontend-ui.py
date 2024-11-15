import tkinter as tk
from tkinter import messagebox

# Initialize the main window
root = tk.Tk()
root.title("Crime Tracker")
root.geometry("400x600")

# Create the side menu frame (initially hidden)
menu_frame = tk.Frame(root, bg="lightgray", width=150)

# Function to toggle the side menu
def toggle_menu():
    if menu_frame.winfo_ismapped():  # Check if the menu is visible
        menu_frame.place_forget()  # Hide the menu
    else:
        menu_frame.place(x=0, y=0, width=150, height=root.winfo_height())  # Show the menu at the left

# Function to show an alert message
def show_alert():
    messagebox.showinfo("Alert", "Alert settings clicked")

# Function to clear the frame before showing a new screen
def clear_frame():
    for widget in root.winfo_children():
        if widget not in [menu_button, menu_frame]:
            widget.destroy()

# Function to show the Home screen
def show_home():
    clear_frame()
    home_label = tk.Label(root, text="Crime Tracker", font=("Arial", 24))
    home_label.pack(pady=10)

    # Add City and Neighborhood Selection
    city_label = tk.Label(root, text="Select City and Neighborhood", font=("Arial", 14))
    city_label.pack(pady=5)
    city_entry = tk.Entry(root, width=30)
    city_entry.pack(pady=5)

    # Map Placeholder
    map_placeholder = tk.Label(root, text="[Map Display Placeholder]", bg="lightgray", width=30, height=5)
    map_placeholder.pack(pady=10)

    # Crime Type Filter Section
    filter_label = tk.Label(root, text="Crime Types", font=("Arial", 14))
    filter_label.pack(pady=5)
    filter_entry = tk.Entry(root, width=30)
    filter_entry.pack(pady=5)

    # Date Range Selection
    date_range_label = tk.Label(root, text="Select Date Range", font=("Arial", 14))
    date_range_label.pack(pady=5)
    start_date_entry = tk.Entry(root, width=14)
    start_date_entry.insert(0, "Start Date")
    start_date_entry.pack(pady=2)
    end_date_entry = tk.Entry(root, width=14)
    end_date_entry.insert(0, "End Date")
    end_date_entry.pack(pady=2)

    # Alert Button
    alert_button = tk.Button(root, text="Set Alert", command=show_alert)
    alert_button.pack(pady=10)

    # Button to navigate to the Crime Map Detail Screen
    view_map_button = tk.Button(root, text="View Map Details", command=show_crime_map)
    view_map_button.pack(pady=10)

# Function to show the Crime Map Detail screen
def show_crime_map():
    clear_frame()
    crime_map_label = tk.Label(root, text="Crime Map Detail", font=("Arial", 18))
    crime_map_label.pack(pady=10)

    location_info = tk.Label(root, text="Location: Town and Country - Maryville University Neighborhood")
    location_info.pack(pady=5)

    crime_detail = tk.Label(root, text="CRIME DETAIL: 6227 Rosebury Ln, Auto Theft - Over 48hrs")
    crime_detail.pack(pady=5)

    back_button = tk.Button(root, text="Back to Home", command=show_home)
    back_button.pack(pady=10)

# Function to show the User Profile screen
def show_profile():
    clear_frame()
    profile_label = tk.Label(root, text="User Profile", font=("Arial", 18))
    profile_label.pack(pady=10)

    # Display user information
    user_info = tk.Label(root, text="USER INFO:\nJohn Doe\njohndoe123@gmail.com", font=("Arial", 14))
    user_info.pack(pady=5)

    # Saved locations section
    saved_locations_label = tk.Label(root, text="Saved Locations", font=("Arial", 14))
    saved_locations_label.pack(pady=5)

    # Example saved locations
    saved_locations = ["Maryville University", "Central West End", "Forest Park"]
    for location in saved_locations:
        location_label = tk.Label(root, text=location)
        location_label.pack()

    # Settings buttons
    alert_settings_button = tk.Button(root, text="Alert Settings", command=lambda: show_message("Alert Settings"))
    alert_settings_button.pack(pady=5)

    account_settings_button = tk.Button(root, text="Account Settings", command=lambda: show_message("Account Settings"))
    account_settings_button.pack(pady=5)

    app_settings_button = tk.Button(root, text="App Settings", command=lambda: show_message("App Settings"))
    app_settings_button.pack(pady=5)

    # Back to Home Button
    back_button = tk.Button(root, text="Back to Home", command=show_home)
    back_button.pack(pady=10)

# Function to display a message for settings buttons
def show_message(setting):
    messagebox.showinfo("Settings", f"{setting} clicked")

# Create the toggle menu button in the upper left corner
menu_button = tk.Button(root, text="☰", font=("Arial", 14), command=toggle_menu)
menu_button.pack(side="top", anchor="nw", padx=5, pady=5)

# Add buttons to the menu frame
home_button = tk.Button(menu_frame, text="Home", command=show_home)
home_button.pack(fill="x", pady=5)

profile_button = tk.Button(menu_frame, text="Profile", command=show_profile)
profile_button.pack(fill="x", pady=5)

# Start with the Home screen
show_home()

# Run the application
root.mainloop()
