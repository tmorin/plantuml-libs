# Traffic


```text
material-4/Maps/Traffic
```

```text
include('material-4/Maps/Traffic')
```



| Illustration | Traffic |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Traffic.png) | ![illustration for Traffic](../../material-4/Maps/Traffic.Local.png) |




## Traffic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Traffic
include('material-4/Maps/Traffic')

' renders the element
Traffic('Traffic', 'Traffic', 'an optional tech label')
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

' loads the Item which embeds the element Traffic
include('material-4/Maps/Traffic')

' renders the element
Traffic('Traffic', 'Traffic', 'an optional tech label')
@enduml
```

