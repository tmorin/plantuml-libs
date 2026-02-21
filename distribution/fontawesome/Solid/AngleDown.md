# AngleDown


```text
fontawesome/Solid/AngleDown
```

```text
include('fontawesome/Solid/AngleDown')
```



| Illustration | AngleDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AngleDown.png) | ![illustration for AngleDown](../../fontawesome/Solid/AngleDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngleDownXs>`
- `<$AngleDownSm>`
- `<$AngleDownMd>`
- `<$AngleDownLg>`





## AngleDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AngleDown
include('fontawesome/Solid/AngleDown')

' renders the element
AngleDown('AngleDown', 'Angle Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AngleDown
include('fontawesome/Solid/AngleDown')

' renders the element
AngleDown('AngleDown', 'Angle Down', 'an optional tech label', 'an optional description')
@enduml
```

