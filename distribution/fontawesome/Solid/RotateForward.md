# RotateForward


```text
fontawesome/Solid/RotateForward
```

```text
include('fontawesome/Solid/RotateForward')
```



| Illustration | RotateForward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RotateForward.png) | ![illustration for RotateForward](../../fontawesome/Solid/RotateForward.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RotateForwardXs>`
- `<$RotateForwardSm>`
- `<$RotateForwardMd>`
- `<$RotateForwardLg>`





## RotateForward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RotateForward
include('fontawesome/Solid/RotateForward')

' renders the element
RotateForward('RotateForward', 'Rotate Forward', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RotateForward
include('fontawesome/Solid/RotateForward')

' renders the element
RotateForward('RotateForward', 'Rotate Forward', 'an optional tech label', 'an optional description')
@enduml
```

