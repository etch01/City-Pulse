export interface Event {
    id: string;
    name: string;
    type: string;
    url: string;
    locale: string;
    info?: string;
    pleaseNote?: string;
  
    images: {
      url: string;
      ratio?: string;
      width?: number;
      height?: number;
      fallback?: boolean;
    }[];
  
    classifications?: {
      primary: boolean;
      family: boolean;
      segment: { id: string; name: string };
      genre?: { id: string; name: string };
      subGenre?: { id: string; name: string };
      type?: { id: string; name: string };
      subType?: { id: string; name: string };
    }[];
  
    dates?: {
      timezone?: string;
      spanMultipleDays?: boolean;
      start?: {
        localDate?: string;
        localTime?: string;
        dateTime?: string;
      };
      status?: { code: string };
    };
  
    products?: {
      id: string;
      name: string;
      type: string;
      url: string;
      classifications: {
        primary: boolean;
        family: boolean;
        segment: { id: string; name: string };
        genre?: { id: string; name: string };
        subGenre?: { id: string; name: string };
        type?: { id: string; name: string };
        subType?: { id: string; name: string };
      }[];
    }[];
  
    promoter?: { id: string; name: string; description?: string };
    promoters?: { id: string; name: string; description?: string }[];
  
    sales?: {
      public?: {
        startDateTime?: string;
        endDateTime?: string;
      };
      presales?: {
        name: string;
        startDateTime?: string;
        endDateTime?: string;
      }[];
    };
  
    seatmap?: { staticUrl: string };
  
    ticketLimit?: { info?: string };
  
    _embedded?: {
      attractions?: {
        id: string;
        name: string;
        type: string;
        url: string;
        images: { url: string }[];
        externalLinks?: Record<string, { url: string }[]>;
        classifications?: {
          segment: { id: string; name: string };
          genre?: { id: string; name: string };
        }[];
      }[];
      venues?: {
        id: string;
        name: string;
        type: string;
        url: string;
        city?: { name?: string };
        state?: { name?: string; stateCode?: string };
        country?: { name?: string; countryCode?: string };
        address?: { line1?: string };
        postalCode?: string;
        location?: { latitude?: string; longitude?: string };
        timezone?: string;
        images?: { url: string }[];
      }[];
    };
  }
  