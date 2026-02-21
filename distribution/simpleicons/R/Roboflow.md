# Roboflow


```text
simpleicons/R/Roboflow
```

```text
include('simpleicons/R/Roboflow')
```



| Illustration | Roboflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Roboflow.png) | ![illustration for Roboflow](../../simpleicons/R/Roboflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoboflowXs>`
- `<$RoboflowSm>`
- `<$RoboflowMd>`
- `<$RoboflowLg>`





## Roboflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Roboflow
include('simpleicons/R/Roboflow')

' renders the element
Roboflow('Roboflow', 'Roboflow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Roboflow
include('simpleicons/R/Roboflow')

' renders the element
Roboflow('Roboflow', 'Roboflow', 'an optional tech label', 'an optional description')
@enduml
```

