# Robotframework


```text
simpleicons-8/R/Robotframework
```

```text
include('simpleicons-8/R/Robotframework')
```



| Illustration | Robotframework |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Robotframework.png) | ![illustration for Robotframework](../../simpleicons-8/R/Robotframework.Local.png) |




## Robotframework

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Robotframework
include('simpleicons-8/R/Robotframework')

' renders the element
Robotframework('Robotframework', 'Robotframework', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Robotframework
include('simpleicons-8/R/Robotframework')

' renders the element
Robotframework('Robotframework', 'Robotframework', 'an optional tech label', 'an optional description')
@enduml
```

