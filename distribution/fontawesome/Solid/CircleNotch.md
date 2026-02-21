# CircleNotch


```text
fontawesome/Solid/CircleNotch
```

```text
include('fontawesome/Solid/CircleNotch')
```



| Illustration | CircleNotch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CircleNotch.png) | ![illustration for CircleNotch](../../fontawesome/Solid/CircleNotch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleNotchXs>`
- `<$CircleNotchSm>`
- `<$CircleNotchMd>`
- `<$CircleNotchLg>`





## CircleNotch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleNotch
include('fontawesome/Solid/CircleNotch')

' renders the element
CircleNotch('CircleNotch', 'Circle Notch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleNotch
include('fontawesome/Solid/CircleNotch')

' renders the element
CircleNotch('CircleNotch', 'Circle Notch', 'an optional tech label', 'an optional description')
@enduml
```

