import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo10 from "./photos/10.jpg";
import photo11 from "./photos/11.jpg";
import photo12 from "./photos/12.jpg";
import photo13 from "./photos/13.jpg";
import photo14 from "./photos/14.jpg";
import photo15 from "./photos/15.jpg";
import photo16 from "./photos/16.jpg";
import photo17 from "./photos/17.jpg";
import photo18 from "./photos/18.jpg";
import photo19 from "./photos/19.jpg";
import photo2 from "./photos/2.jpg";
import photo20 from "./photos/20.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";
import photo8 from "./photos/8.jpg";
import photo9 from "./photos/9.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
  blurDataURL: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Golden Gate Bridge",
    src: photo1,
    photographer: "Pixabay",
    location: "Mill Valley, CA, United States",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPYd/n2gbNX9p848+H/fwZuRgZFSWFpFVUJNU0Ax1YLMwpGYb0AAAAASUVORK5CYII=",
  },
  {
    id: "2",
    name: "Brown Concrete Buildings and Bridge",
    src: photo2,
    photographer: "Joseph Costa",
    location: "Venezia, Veneto, Italy",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNQFWfnYWfw9rBh8NQViYoNnblqOYO2KIOTvfHD/78YtMUZBJkZmitTALFMCiqTzBv/AAAAAElFTkSuQmCC",
  },
  {
    id: "3",
    name: "House Beside Trees and Castle",
    src: photo3,
    photographer: "Rudy Kirchner",
    location: "Unknown",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGN49f//8XtvD5y/NGX5fAY5K2U1G2UjW1EtS14GBj4GHimGyrLcwnJPAHIaDmsGcOc5AAAAAElFTkSuQmCC",
  },
  {
    id: "4",
    name: "Concrete Houses and Green Trees",
    src: photo4,
    photographer: "Pierre Blaché",
    location: "Paris, France",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNg5WCwstH8+fvmitWtDJz8DDvXtP3/cSy30IlBXlnU089AU19SQoYfABw+DQRANL9TAAAAAElFTkSuQmCC",
  },
  {
    id: "5",
    name: "Cathedral Illustration",
    src: photo5,
    photographer: "Joseph Costa",
    location: "Felix Mittermeier",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AFy09DeSwmfD+wCG0ukTBwBKjaIA6v//cl1QyN3gALC2u8vU2cfN1Kx5FxaU3xj6AAAAAElFTkSuQmCC",
  },
  {
    id: "6",
    name: "Mountain View with River",
    src: photo6,
    photographer: "Lena Vasiljeva",
    location: "Banff National Park, Canada",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGP4+f//p+//H7/6ylBQ0+wfEWtgacnAwM7AIsjAL8nAYOcub+ep7OClBQCL1A39am8ttQAAAABJRU5ErkJggg==",
  },
  {
    id: "7",
    name: "Sunset Over the Ocean",
    src: photo7,
    photographer: "Carlos Sanchez",
    location: "Malibu, CA, United States",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AMvJ0Pv6+/v6+wDMwrX76tL64cIAZVVFlXlckXdVACUAADIPACsFABh2FDhHooR4AAAAAElFTkSuQmCC",
  },
  {
    id: "8",
    name: "Snowy Forest Path",
    src: photo8,
    photographer: "Anna Kowalski",
    location: "Black Forest, Germany",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNYsfnoozf//QNCGZIzcr///29lbcOgrWNYXlmjqqrKICgkYWHtwsLOBwB1+g4uBywndQAAAABJRU5ErkJggg==",
  },
  {
    id: "9",
    name: "Night View of City Lights",
    src: photo9,
    photographer: "Marcus Brown",
    location: "Tokyo, Japan",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ACc9TFR+l3q00VObsgBgaHDCyNbo//+k1eoAAQgAMiwnoI5/DxAHZ+AQ+z+AmwsAAAAASUVORK5CYII=",
  },
  {
    id: "10",
    name: "Old Wooden Bridge in Fog",
    src: photo10,
    photographer: "Emily Carter",
    location: "Portland, OR, United States",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ANzPqezesP/5uf/xuwD5rWX/3oL/24ydiGYAvotg8bZ+dVxGAAMHGoMXdTayu6cAAAAASUVORK5CYII=",
  },
  {
    id: "11",
    name: "Rocky Beach with Waves",
    src: photo11,
    photographer: "Liam Taylor",
    location: "Big Sur, CA, United States",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ANTf8vf+/8fU5gDi8P/d6vzF2O0AV2VqcX6FXWpwAAUCACAbEhkTBSJuFI9dr43jAAAAAElFTkSuQmCC",
  },
  {
    id: "12",
    name: "Ancient Temple Ruins",
    src: photo12,
    photographer: "Sophia Laurent",
    location: "Athens, Greece",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPY+eJ/09wdTMwMDPf//XdzMimKd2VISvSa1pH77MIqhshQp5Vzm2sKowB5VxIjUfQEnQAAAABJRU5ErkJggg==",
  },
  {
    id: "13",
    name: "Hot Air Balloons Over Desert",
    src: photo13,
    photographer: "Noah Fernandez",
    location: "Cappadocia, Turkey",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP49+/Rz1+PP32+8+nzHYa6fL+2Yt+iWPOkEDMGbkYGPQVmA2V2DQU2AMzSEK/OQpDsAAAAAElFTkSuQmCC",
  },
  {
    id: "14",
    name: "Glass Skyscraper Reflection",
    src: photo14,
    photographer: "Olivia Moore",
    location: "New York City, NY, United States",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AEZ+lInC2ICruQDi//+SsbKZqqUAp6KQ0KyLDQIAADsxH6eQchwfFbMzEpDGjDLFAAAAAElFTkSuQmCC",
  },
  {
    id: "15",
    name: "Castle on a Hilltop",
    src: photo15,
    photographer: "Benjamin White",
    location: "Edinburgh, Scotland",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMwjQllEJRUj02s37ObYdf98wldVRuv77/+/z8Dp644gygDuyIrgyQDACgCDXy3TFY1AAAAAElFTkSuQmCC",
  },
  {
    id: "16",
    name: "Autumn Leaves in Park",
    src: photo16,
    photographer: "Emma Johnson",
    location: "Kyoto, Japan",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOY3xn5/+va/7d6L22pYphb53V7V/Wseq/MaAsGbWmGmnRbWQYGR3MpAJkUEHLXIAjPAAAAAElFTkSuQmCC",
  },
  {
    id: "17",
    name: "Colorful Street Art",
    src: photo17,
    photographer: "David Gonzalez",
    location: "Berlin, Germany",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGMQZOLYt2Xf/x//GbL8g88eObHvwB6GILcA68AMd99ABlkGBiMpGX5GFgBlJg47vVNBCQAAAABJRU5ErkJggg==",
  },
  {
    id: "18",
    name: "Tranquil Lake with Reflections",
    src: photo18,
    photographer: "Natalie Wong",
    location: "Lake Bled, Slovenia",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPon7123cZ9j+/c+//9M4OOkVNiTFpXYe7alkoGBmYxOVlVE02tAEsTAJAZEA0eRsJ9AAAAAElFTkSuQmCC",
  },
  {
    id: "19",
    name: "Bustling Market Street",
    src: photo19,
    photographer: "Ethan Clark",
    location: "Marrakech, Morocco",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGP4//7x/6/3vD1cGfr6+5cvW6Klpc1Ql1eUEJ3AxsDJsGXTtsyMHCVlNQCVRhDkw/Ly2QAAAABJRU5ErkJggg==",
  },
  {
    id: "20",
    name: "Snow-Capped Mountain Peak",
    src: photo20,
    photographer: "Isabella Martinez",
    location: "Swiss Alps, Switzerland",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AOfn5/////3+/gB5enaho52Zl5AAISEbIyEXDAMAABMOAxgXDgkJArsbDvLRTNYMAAAAAElFTkSuQmCC",
  },
];

export default wondersImages;
