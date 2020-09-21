export interface Bookmark {
  display:Display
  url:string
  accent: {
    by: string
    hsl: ColorHSL
    rgb: ColorRGB
  }
  color: {
    by: string
    hsl: ColorHSL
    rgb: ColorRGB
    opacity: number
  }
  background: {
    show: boolean
    type: BackgroundType
    opacity: number
    image: {
      url: string
    }
    video: {
      url: string
    }
  }
  wide: false
  tall: false
  searchMatch: false
  timeStamp: 1546453101749
}

enum BackgroundType {
  "image"
}

interface ColorHSL {
  h: number
  s: number
  l: number
}

interface ColorRGB {
  r: number
  g: number
  b: number
}

enum DisplayDirection {
  "vertical",
  "horrizontal",
}

enum DisplayOrder {
  "visualname"
}

enum DisplayAlignment {
  "centercenter"
}

interface Display {
  direction: DisplayDirection
  order: DisplayOrder
  alignment: DisplayAlignment
  gutter: number
  rotate: number
  translate: {
    x: number
    y: number
  },
  visual: {
    show: boolean
    type: string // make own type
    letter: {
      size: number
      text: string
    },
    image: {
      size: number
      url: string
    },
    icon: {
      size: number
      name: string
      prefix: string
      label: string
    },
    shadow: {
      size: number
    }
  },
  name: {
    show: boolean
    text: string
    size: number
  }
}