# Robotframework


```text
simpleicons/R/Robotframework
```

```text
include('simpleicons/R/Robotframework')
```



| Illustration | Robotframework |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Robotframework.png) | ![illustration for Robotframework](../../simpleicons/R/Robotframework.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RobotframeworkXs>`
- `<$RobotframeworkSm>`
- `<$RobotframeworkMd>`
- `<$RobotframeworkLg>`





## Robotframework

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Robotframework
include('simpleicons/R/Robotframework')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Robotframework
include('simpleicons/R/Robotframework')

' renders the element
Robotframework('Robotframework', 'Robotframework', 'an optional tech label', 'an optional description')
@enduml
```

