//this root layout applies to everypage 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
     
        {children}
        
      </body>
    </html>
  );
}
