# TurnDown


```text
fontawesome-6/Solid/TurnDown
```

```text
include('fontawesome-6/Solid/TurnDown')
```



| Illustration | TurnDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TurnDown.png) | ![illustration for TurnDown](../../fontawesome-6/Solid/TurnDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurnDownXs>`
- `<$TurnDownSm>`
- `<$TurnDownMd>`
- `<$TurnDownLg>`





## TurnDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TurnDown
include('fontawesome-6/Solid/TurnDown')

' renders the element
TurnDown('TurnDown', 'Turn Down', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TurnDown
include('fontawesome-6/Solid/TurnDown')

' renders the element
TurnDown('TurnDown', 'Turn Down', 'an optional tech label', 'an optional description')
@enduml
```

