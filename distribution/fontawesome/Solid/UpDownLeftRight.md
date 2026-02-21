# UpDownLeftRight


```text
fontawesome/Solid/UpDownLeftRight
```

```text
include('fontawesome/Solid/UpDownLeftRight')
```



| Illustration | UpDownLeftRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UpDownLeftRight.png) | ![illustration for UpDownLeftRight](../../fontawesome/Solid/UpDownLeftRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpDownLeftRightXs>`
- `<$UpDownLeftRightSm>`
- `<$UpDownLeftRightMd>`
- `<$UpDownLeftRightLg>`





## UpDownLeftRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UpDownLeftRight
include('fontawesome/Solid/UpDownLeftRight')

' renders the element
UpDownLeftRight('UpDownLeftRight', 'Up Down Left Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UpDownLeftRight
include('fontawesome/Solid/UpDownLeftRight')

' renders the element
UpDownLeftRight('UpDownLeftRight', 'Up Down Left Right', 'an optional tech label', 'an optional description')
@enduml
```

