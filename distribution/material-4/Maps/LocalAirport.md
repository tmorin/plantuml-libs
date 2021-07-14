# LocalAirport


```text
material-4/Maps/LocalAirport
```

```text
include('material-4/Maps/LocalAirport')
```



| Illustration | LocalAirport |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalAirport.png) | ![illustration for LocalAirport](../../material-4/Maps/LocalAirport.Local.png) |




## LocalAirport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalAirport
include('material-4/Maps/LocalAirport')

' renders the element
LocalAirport('LocalAirport', 'Local Airport', 'an optional tech label')
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

' loads the Item which embeds the element LocalAirport
include('material-4/Maps/LocalAirport')

' renders the element
LocalAirport('LocalAirport', 'Local Airport', 'an optional tech label')
@enduml
```

