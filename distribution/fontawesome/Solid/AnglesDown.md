# AnglesDown


```text
fontawesome/Solid/AnglesDown
```

```text
include('fontawesome/Solid/AnglesDown')
```



| Illustration | AnglesDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AnglesDown.png) | ![illustration for AnglesDown](../../fontawesome/Solid/AnglesDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnglesDownXs>`
- `<$AnglesDownSm>`
- `<$AnglesDownMd>`
- `<$AnglesDownLg>`





## AnglesDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AnglesDown
include('fontawesome/Solid/AnglesDown')

' renders the element
AnglesDown('AnglesDown', 'Angles Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AnglesDown
include('fontawesome/Solid/AnglesDown')

' renders the element
AnglesDown('AnglesDown', 'Angles Down', 'an optional tech label', 'an optional description')
@enduml
```

