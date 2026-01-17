import { useState, useEffect } from "react";

export type Currency = "USD" | "INR";

export function useLocationCurrency() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [countryCode, setCountryCode] = useState<string | null>(null);

  useEffect(() => {
    async function detectLocation() {
      try {
        // Using a free IP geolocation API
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        
        if (data.country_code === "IN") {
          setCurrency("INR");
        } else {
          setCurrency("USD");
        }
        setCountryCode(data.country_code);
      } catch (error) {
        console.error("Failed to detect location:", error);
        // Default to USD if detection fails
        setCurrency("USD");
      }
    }

    detectLocation();
  }, []);

  return { currency, countryCode };
}
