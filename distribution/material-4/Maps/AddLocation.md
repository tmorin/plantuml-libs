# AddLocation


```text
material-4/Maps/AddLocation
```

```text
include('material-4/Maps/AddLocation')
```



| Illustration | AddLocation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/AddLocation.png) | ![illustration for AddLocation](../../material-4/Maps/AddLocation.Local.png) |




## AddLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddLocation
include('material-4/Maps/AddLocation')

' renders the element
AddLocation('AddLocation', 'Add Location', 'an optional tech label')
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

' loads the Item which embeds the element AddLocation
include('material-4/Maps/AddLocation')

' renders the element
AddLocation('AddLocation', 'Add Location', 'an optional tech label')
@enduml
```

