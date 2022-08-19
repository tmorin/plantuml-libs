# AddIcCall


```text
material-4/Communication/AddIcCall
```

```text
include('material-4/Communication/AddIcCall')
```



| Illustration | AddIcCall |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/AddIcCall.png) | ![illustration for AddIcCall](../../material-4/Communication/AddIcCall.Local.png) |




## AddIcCall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddIcCall
include('material-4/Communication/AddIcCall')

' renders the element
AddIcCall('AddIcCall', 'Add Ic Call', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddIcCall
include('material-4/Communication/AddIcCall')

' renders the element
AddIcCall('AddIcCall', 'Add Ic Call', 'an optional tech label', 'an optional description')
@enduml
```
