# EditLocation


```text
material-4/Maps/EditLocation
```

```text
include('material-4/Maps/EditLocation')
```



| Illustration | EditLocation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/EditLocation.png) | ![illustration for EditLocation](../../material-4/Maps/EditLocation.Local.png) |




## EditLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EditLocation
include('material-4/Maps/EditLocation')

' renders the element
EditLocation('EditLocation', 'Edit Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EditLocation
include('material-4/Maps/EditLocation')

' renders the element
EditLocation('EditLocation', 'Edit Location', 'an optional tech label', 'an optional description')
@enduml
```

