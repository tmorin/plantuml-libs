# LocalAirport


```text
material/Maps/LocalAirport
```

```text
include('material/Maps/LocalAirport')
```



| Illustration | LocalAirport |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalAirport.png) | ![illustration for LocalAirport](../../material/Maps/LocalAirport.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalAirportXs>`
- `<$LocalAirportSm>`
- `<$LocalAirportMd>`
- `<$LocalAirportLg>`





## LocalAirport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalAirport
include('material/Maps/LocalAirport')

' renders the element
LocalAirport('LocalAirport', 'Local Airport', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalAirport
include('material/Maps/LocalAirport')

' renders the element
LocalAirport('LocalAirport', 'Local Airport', 'an optional tech label', 'an optional description')
@enduml
```

