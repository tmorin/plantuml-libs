# Panorama


```text
material-4/Image/Panorama
```

```text
include('material-4/Image/Panorama')
```



| Illustration | Panorama |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Panorama.png) | ![illustration for Panorama](../../material-4/Image/Panorama.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PanoramaXs>`
- `<$PanoramaSm>`
- `<$PanoramaMd>`
- `<$PanoramaLg>`





## Panorama

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Panorama
include('material-4/Image/Panorama')

' renders the element
Panorama('Panorama', 'Panorama', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Panorama
include('material-4/Image/Panorama')

' renders the element
Panorama('Panorama', 'Panorama', 'an optional tech label', 'an optional description')
@enduml
```

