/*
  # Add RLS policies for customers table

  Allow public INSERT (for the contact form) and authenticated users to read all messages
*/

CREATE POLICY "Allow public insert to customers"
  ON customers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all messages"
  ON customers
  FOR SELECT
  TO authenticated
  USING (true);
