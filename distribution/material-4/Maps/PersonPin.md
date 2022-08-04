# PersonPin


```text
material-4/Maps/PersonPin
```

```text
include('material-4/Maps/PersonPin')
```



| Illustration | PersonPin |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/PersonPin.png) | ![illustration for PersonPin](../../material-4/Maps/PersonPin.Local.png) |




## PersonPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PersonPin
include('material-4/Maps/PersonPin')

' renders the element
PersonPin('PersonPin', 'Person Pin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonPin
include('material-4/Maps/PersonPin')

' renders the element
PersonPin('PersonPin', 'Person Pin', 'an optional tech label', 'an optional description')
@enduml
```

