# Panorama


```text
material/Image/Panorama
```

```text
include('material/Image/Panorama')
```



| Illustration | Panorama |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Panorama.png) | ![illustration for Panorama](../../material/Image/Panorama.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Panorama
include('material/Image/Panorama')

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
include('material/bootstrap')

' loads the Item which embeds the element Panorama
include('material/Image/Panorama')

' renders the element
Panorama('Panorama', 'Panorama', 'an optional tech label', 'an optional description')
@enduml
```

