# Flight


```text
material-4/Maps/Flight
```

```text
include('material-4/Maps/Flight')
```



| Illustration | Flight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Flight.png) | ![illustration for Flight](../../material-4/Maps/Flight.Local.png) |




## Flight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Flight
include('material-4/Maps/Flight')

' renders the element
Flight('Flight', 'Flight', 'an optional tech label')
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

' loads the Item which embeds the element Flight
include('material-4/Maps/Flight')

' renders the element
Flight('Flight', 'Flight', 'an optional tech label')
@enduml
```

