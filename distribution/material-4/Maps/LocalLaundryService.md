# LocalLaundryService


```text
material-4/Maps/LocalLaundryService
```

```text
include('material-4/Maps/LocalLaundryService')
```



| Illustration | LocalLaundryService |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalLaundryService.png) | ![illustration for LocalLaundryService](../../material-4/Maps/LocalLaundryService.Local.png) |




## LocalLaundryService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalLaundryService
include('material-4/Maps/LocalLaundryService')

' renders the element
LocalLaundryService('LocalLaundryService', 'Local Laundry Service', 'an optional tech label')
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

' loads the Item which embeds the element LocalLaundryService
include('material-4/Maps/LocalLaundryService')

' renders the element
LocalLaundryService('LocalLaundryService', 'Local Laundry Service', 'an optional tech label')
@enduml
```

