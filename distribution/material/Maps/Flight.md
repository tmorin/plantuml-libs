# Flight


```text
material/Maps/Flight
```

```text
include('material/Maps/Flight')
```



| Illustration | Flight |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Flight.png) | ![illustration for Flight](../../material/Maps/Flight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlightXs>`
- `<$FlightSm>`
- `<$FlightMd>`
- `<$FlightLg>`





## Flight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Flight
include('material/Maps/Flight')

' renders the element
Flight('Flight', 'Flight', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flight
include('material/Maps/Flight')

' renders the element
Flight('Flight', 'Flight', 'an optional tech label', 'an optional description')
@enduml
```

