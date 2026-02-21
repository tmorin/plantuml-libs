# MapsUgc


```text
material/Maps/MapsUgc
```

```text
include('material/Maps/MapsUgc')
```



| Illustration | MapsUgc |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/MapsUgc.png) | ![illustration for MapsUgc](../../material/Maps/MapsUgc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapsUgcXs>`
- `<$MapsUgcSm>`
- `<$MapsUgcMd>`
- `<$MapsUgcLg>`





## MapsUgc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MapsUgc
include('material/Maps/MapsUgc')

' renders the element
MapsUgc('MapsUgc', 'Maps Ugc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MapsUgc
include('material/Maps/MapsUgc')

' renders the element
MapsUgc('MapsUgc', 'Maps Ugc', 'an optional tech label', 'an optional description')
@enduml
```

