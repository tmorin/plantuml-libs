# HillRockslide


```text
fontawesome/Solid/HillRockslide
```

```text
include('fontawesome/Solid/HillRockslide')
```



| Illustration | HillRockslide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HillRockslide.png) | ![illustration for HillRockslide](../../fontawesome/Solid/HillRockslide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HillRockslideXs>`
- `<$HillRockslideSm>`
- `<$HillRockslideMd>`
- `<$HillRockslideLg>`





## HillRockslide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HillRockslide
include('fontawesome/Solid/HillRockslide')

' renders the element
HillRockslide('HillRockslide', 'Hill Rockslide', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HillRockslide
include('fontawesome/Solid/HillRockslide')

' renders the element
HillRockslide('HillRockslide', 'Hill Rockslide', 'an optional tech label', 'an optional description')
@enduml
```

