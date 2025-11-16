/*
  # Müşteriler Tablosu Oluşturma

  1. Yeni Tablolar
    - `customers`
      - `id` (uuid, primary key, otomatik oluşturulur)
      - `name` (text, müşteri adı)
      - `email` (text, müşteri email)
      - `message` (text, müşteri mesajı)
      - `created_at` (timestamptz, oluşturulma tarihi)

  2. Güvenlik
    - `customers` tablosunda RLS aktif
    - Herkes mesaj gönderebilir (INSERT)
    - Sadece authenticated kullanıcılar mesajları okuyabilir (SELECT)
*/

CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Herkes mesaj gönderebilir"
  ON customers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated kullanıcılar mesajları okuyabilir"
  ON customers
  FOR SELECT
  TO authenticated
  USING (true);