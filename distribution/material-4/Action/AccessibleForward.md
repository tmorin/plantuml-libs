# AccessibleForward


```text
material-4/Action/AccessibleForward
```

```text
include('material-4/Action/AccessibleForward')
```



| Illustration | AccessibleForward |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AccessibleForward.png) | ![illustration for AccessibleForward](../../material-4/Action/AccessibleForward.Local.png) |




## AccessibleForward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AccessibleForward
include('material-4/Action/AccessibleForward')

' renders the element
AccessibleForward('AccessibleForward', 'Accessible Forward', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AccessibleForward
include('material-4/Action/AccessibleForward')

' renders the element
AccessibleForward('AccessibleForward', 'Accessible Forward', 'an optional tech label', 'an optional description')
@enduml
```

