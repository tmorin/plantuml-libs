# MapsUgc


```text
material-4/Maps/MapsUgc
```

```text
include('material-4/Maps/MapsUgc')
```



| Illustration | MapsUgc |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/MapsUgc.png) | ![illustration for MapsUgc](../../material-4/Maps/MapsUgc.Local.png) |




## MapsUgc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MapsUgc
include('material-4/Maps/MapsUgc')

' renders the element
MapsUgc('MapsUgc', 'Maps Ugc', 'an optional tech label')
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

' loads the Item which embeds the element MapsUgc
include('material-4/Maps/MapsUgc')

' renders the element
MapsUgc('MapsUgc', 'Maps Ugc', 'an optional tech label')
@enduml
```

