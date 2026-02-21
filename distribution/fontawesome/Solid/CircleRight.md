# CircleRight


```text
fontawesome/Solid/CircleRight
```

```text
include('fontawesome/Solid/CircleRight')
```



| Illustration | CircleRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CircleRight.png) | ![illustration for CircleRight](../../fontawesome/Solid/CircleRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleRightXs>`
- `<$CircleRightSm>`
- `<$CircleRightMd>`
- `<$CircleRightLg>`





## CircleRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleRight
include('fontawesome/Solid/CircleRight')

' renders the element
CircleRight('CircleRight', 'Circle Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleRight
include('fontawesome/Solid/CircleRight')

' renders the element
CircleRight('CircleRight', 'Circle Right', 'an optional tech label', 'an optional description')
@enduml
```

