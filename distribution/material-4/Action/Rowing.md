# Rowing


```text
material-4/Action/Rowing
```

```text
include('material-4/Action/Rowing')
```



| Illustration | Rowing |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Rowing.png) | ![illustration for Rowing](../../material-4/Action/Rowing.Local.png) |




## Rowing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Rowing
include('material-4/Action/Rowing')

' renders the element
Rowing('Rowing', 'Rowing', 'an optional tech label')
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

' loads the Item which embeds the element Rowing
include('material-4/Action/Rowing')

' renders the element
Rowing('Rowing', 'Rowing', 'an optional tech label')
@enduml
```

