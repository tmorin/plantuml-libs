# Robotframework


```text
simpleicons-14/R/Robotframework
```

```text
include('simpleicons-14/R/Robotframework')
```



| Illustration | Robotframework |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Robotframework.png) | ![illustration for Robotframework](../../simpleicons-14/R/Robotframework.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Robotframework
include('simpleicons-14/R/Robotframework')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Robotframework
include('simpleicons-14/R/Robotframework')

' renders the element
Robotframework('Robotframework', 'Robotframework', 'an optional tech label', 'an optional description')
@enduml
```

