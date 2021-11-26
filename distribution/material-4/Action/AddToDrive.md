# AddToDrive


```text
material-4/Action/AddToDrive
```

```text
include('material-4/Action/AddToDrive')
```



| Illustration | AddToDrive |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AddToDrive.png) | ![illustration for AddToDrive](../../material-4/Action/AddToDrive.Local.png) |




## AddToDrive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddToDrive
include('material-4/Action/AddToDrive')

' renders the element
AddToDrive('AddToDrive', 'Add To Drive', 'an optional tech label')
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

' loads the Item which embeds the element AddToDrive
include('material-4/Action/AddToDrive')

' renders the element
AddToDrive('AddToDrive', 'Add To Drive', 'an optional tech label')
@enduml
```

