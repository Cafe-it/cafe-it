declare global {
  interface Window {
    naver: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        LatLng: new (lat: number, lng: number) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
        Event: {
          addListener: (target: any, event: string, listener: Function) => void;
        };
        MapTypeControlStyle: {
          DROPDOWN: number;
        };
        ZoomControlStyle: {
          SMALL: number;
        };
        Position: {
          TOP_RIGHT: number;
        };
        Size: new (width: number, height: number) => any;
        Point: new (x: number, y: number) => any;
      };
    };
  }
}

export {};
