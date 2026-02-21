# AnglesRight


```text
fontawesome/Solid/AnglesRight
```

```text
include('fontawesome/Solid/AnglesRight')
```



| Illustration | AnglesRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AnglesRight.png) | ![illustration for AnglesRight](../../fontawesome/Solid/AnglesRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnglesRightXs>`
- `<$AnglesRightSm>`
- `<$AnglesRightMd>`
- `<$AnglesRightLg>`





## AnglesRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AnglesRight
include('fontawesome/Solid/AnglesRight')

' renders the element
AnglesRight('AnglesRight', 'Angles Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AnglesRight
include('fontawesome/Solid/AnglesRight')

' renders the element
AnglesRight('AnglesRight', 'Angles Right', 'an optional tech label', 'an optional description')
@enduml
```

