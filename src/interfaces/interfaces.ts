
// Home screen 
export interface Route {
    key:  string,
    name: string,
    params: string 
}
export interface Navigation {
    navigation?: any;
    route: Route;
}
export interface IndicatorsItem {
    codigo: string,
    fecha: string,
    nombre: string,
    unidad_medida: string,
    valor: number
}

// detail and info screen 
export interface screenProps {
    navigation: Navigation;
    route:      RouteDetails;
}

export interface Navigation {
}

export interface RouteDetails {
    key:    string;
    name:   string;
    params: Params;
}

export interface Params {
    item: Item;
}

export interface Item {
    codigo:        string;
    nombre:        string;
    unidad_medida: string;
    fecha:         Date;
    valor:         number;
}

// chart component 
export interface ChartData {
    values: number[];
    dates:  string[];
}








