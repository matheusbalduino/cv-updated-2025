export interface GridItem {
  title?: string; // The title of the item
  subtitle?: string; // Optional subtitle for the item
  content?: string; // Optional content for the item
  date?: string; // Optional date for the item
  link?: string; // Optional link for the item
}

export interface NavMenuItem {
  label: string; // The text to display for the menu item
  link: string;  // The URL or route for the menu item
  color: string; // The color of the menu item (e.g., 'primary', 'accent', 'warn')
}

export interface GridImageItem {
  alt?: string; // The title of the image item
  imageUrl: string; // URL to the image
}

export interface ImageTitle {
  src: string; // The source URL of the image
  alt?: string; // Optional alternative text for the image
}