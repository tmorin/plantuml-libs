# LeftRight


```text
fontawesome/Solid/LeftRight
```

```text
include('fontawesome/Solid/LeftRight')
```



| Illustration | LeftRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LeftRight.png) | ![illustration for LeftRight](../../fontawesome/Solid/LeftRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeftRightXs>`
- `<$LeftRightSm>`
- `<$LeftRightMd>`
- `<$LeftRightLg>`





## LeftRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LeftRight
include('fontawesome/Solid/LeftRight')

' renders the element
LeftRight('LeftRight', 'Left Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LeftRight
include('fontawesome/Solid/LeftRight')

' renders the element
LeftRight('LeftRight', 'Left Right', 'an optional tech label', 'an optional description')
@enduml
```

