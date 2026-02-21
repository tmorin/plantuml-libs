# CircleArrowDown


```text
fontawesome/Solid/CircleArrowDown
```

```text
include('fontawesome/Solid/CircleArrowDown')
```



| Illustration | CircleArrowDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CircleArrowDown.png) | ![illustration for CircleArrowDown](../../fontawesome/Solid/CircleArrowDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleArrowDownXs>`
- `<$CircleArrowDownSm>`
- `<$CircleArrowDownMd>`
- `<$CircleArrowDownLg>`





## CircleArrowDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleArrowDown
include('fontawesome/Solid/CircleArrowDown')

' renders the element
CircleArrowDown('CircleArrowDown', 'Circle Arrow Down', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleArrowDown
include('fontawesome/Solid/CircleArrowDown')

' renders the element
CircleArrowDown('CircleArrowDown', 'Circle Arrow Down', 'an optional tech label', 'an optional description')
@enduml
```

