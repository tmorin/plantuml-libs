# AccessTime


```text
material-4/Device/AccessTime
```

```text
include('material-4/Device/AccessTime')
```



| Illustration | AccessTime |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/AccessTime.png) | ![illustration for AccessTime](../../material-4/Device/AccessTime.Local.png) |




## AccessTime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AccessTime
include('material-4/Device/AccessTime')

' renders the element
AccessTime('AccessTime', 'Access Time', 'an optional tech label')
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

' loads the Item which embeds the element AccessTime
include('material-4/Device/AccessTime')

' renders the element
AccessTime('AccessTime', 'Access Time', 'an optional tech label')
@enduml
```

