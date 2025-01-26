const fetchweatherData = async (
  latitude: number,
  longitude: number
): Promise<{
  time: string;
  location: string;
  timezone: string;
}> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=Asia/Kolkata`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    const time = data.current_weather.time;
    const location = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    const timezone = data.timezone;
    console.log(data);
    return { time, location, timezone };
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

export default fetchweatherData;
