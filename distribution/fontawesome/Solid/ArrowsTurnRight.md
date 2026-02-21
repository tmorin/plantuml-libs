# ArrowsTurnRight


```text
fontawesome/Solid/ArrowsTurnRight
```

```text
include('fontawesome/Solid/ArrowsTurnRight')
```



| Illustration | ArrowsTurnRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsTurnRight.png) | ![illustration for ArrowsTurnRight](../../fontawesome/Solid/ArrowsTurnRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsTurnRightXs>`
- `<$ArrowsTurnRightSm>`
- `<$ArrowsTurnRightMd>`
- `<$ArrowsTurnRightLg>`





## ArrowsTurnRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsTurnRight
include('fontawesome/Solid/ArrowsTurnRight')

' renders the element
ArrowsTurnRight('ArrowsTurnRight', 'Arrows Turn Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsTurnRight
include('fontawesome/Solid/ArrowsTurnRight')

' renders the element
ArrowsTurnRight('ArrowsTurnRight', 'Arrows Turn Right', 'an optional tech label', 'an optional description')
@enduml
```

