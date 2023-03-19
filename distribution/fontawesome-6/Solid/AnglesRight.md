# AnglesRight


```text
fontawesome-6/Solid/AnglesRight
```

```text
include('fontawesome-6/Solid/AnglesRight')
```



| Illustration | AnglesRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AnglesRight.png) | ![illustration for AnglesRight](../../fontawesome-6/Solid/AnglesRight.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AnglesRight
include('fontawesome-6/Solid/AnglesRight')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AnglesRight
include('fontawesome-6/Solid/AnglesRight')

' renders the element
AnglesRight('AnglesRight', 'Angles Right', 'an optional tech label', 'an optional description')
@enduml
```

