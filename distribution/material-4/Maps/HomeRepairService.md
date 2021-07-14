# HomeRepairService


```text
material-4/Maps/HomeRepairService
```

```text
include('material-4/Maps/HomeRepairService')
```



| Illustration | HomeRepairService |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/HomeRepairService.png) | ![illustration for HomeRepairService](../../material-4/Maps/HomeRepairService.Local.png) |




## HomeRepairService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HomeRepairService
include('material-4/Maps/HomeRepairService')

' renders the element
HomeRepairService('HomeRepairService', 'Home Repair Service', 'an optional tech label')
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

' loads the Item which embeds the element HomeRepairService
include('material-4/Maps/HomeRepairService')

' renders the element
HomeRepairService('HomeRepairService', 'Home Repair Service', 'an optional tech label')
@enduml
```

