# Pending


```text
material-4/Action/Pending
```

```text
include('material-4/Action/Pending')
```



| Illustration | Pending |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Pending.png) | ![illustration for Pending](../../material-4/Action/Pending.Local.png) |




## Pending

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Pending
include('material-4/Action/Pending')

' renders the element
Pending('Pending', 'Pending', 'an optional tech label')
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

' loads the Item which embeds the element Pending
include('material-4/Action/Pending')

' renders the element
Pending('Pending', 'Pending', 'an optional tech label')
@enduml
```

