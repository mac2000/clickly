export interface Configuration {
  clientId: string;
  scope?: string[];
  apiKey?: string;
}

export interface GoogleApi {
  load: (libraries: string, callback: Function) => void;
  client: {
    init: (configuration: { clientId: string, scope: string }) => Promise<any>;
    analytics: {
      management: {
        accountSummaries: {
          list: () => Promise<any>
        },
        accounts: {
          list: () => Promise<{ results: { totalResults: number, items: any[] } }>
        },
        webproperties: {
          list: () => Promise<{ results: { totalResults: number, items: any[] } }>
        },
        profiles: {
          list: () => Promise<{ results: { totalResults: number, items: any[] } }>
          get: () => Promise<any>
        }
      },
      data: {
        ga: {
          get: (params: any) => Promise<{ result: { totalResults: number, rows: any[] } }>
        },
        realtime: {
          get: (params: any) => Promise<{ result: { totalResults: number, rows: any[] } }>
        }
      }
    }
  };
  auth2: {
    getAuthInstance: () => {
      signIn: () => void;
      signOut: () => void;
      disconnect: () => void;

      isSignedIn: {
        get: () => boolean;
        listen: (callback: (isSignedIn: boolean) => void) => void;
      };

      currentUser: {
        get: () => GoogleUser;
        listen: (callback: (currentUser: GoogleUser) => void) => void;
      };
    };
  };
}

export interface GoogleUser {
  getBasicProfile: () => {
    getId: () => string;
    getEmail: () => string;
    getName: () => string;
    getImageUrl: () => string;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
}

export interface GoogleAccount {
  id: string;
  name: string;
}

export interface GoogleProperty {
  id: string;
  name: string;
  accountId: string;
}

export interface GoogleProfile {
  id: string;
  name: string;
  accountId: string;
  webPropertyId: string;
  websiteUrl: string;
}

export interface GoogleSummary {
  id: string;
  name: string;
  webProperties: {
    id: string;
    name: string;
    level: string;
    websiteUrl: string;
    profiles: {
      id: string;
      name: string;
      type: string;
    }[];
  }[];
}

export interface GoogleSummaryFlat {
  accountId: string;
  propertyId: string;
  profileId: string;
  accountName: string;
  propertyName: string;
  profileName: string;
  websiteUrl: string;
  level: string;
  type: string;
}
