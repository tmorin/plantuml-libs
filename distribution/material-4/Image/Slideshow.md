# Slideshow


```text
material-4/Image/Slideshow
```

```text
include('material-4/Image/Slideshow')
```



| Illustration | Slideshow |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Slideshow.png) | ![illustration for Slideshow](../../material-4/Image/Slideshow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlideshowXs>`
- `<$SlideshowSm>`
- `<$SlideshowMd>`
- `<$SlideshowLg>`





## Slideshow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Slideshow
include('material-4/Image/Slideshow')

' renders the element
Slideshow('Slideshow', 'Slideshow', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Slideshow
include('material-4/Image/Slideshow')

' renders the element
Slideshow('Slideshow', 'Slideshow', 'an optional tech label', 'an optional description')
@enduml
```

