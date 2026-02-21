# EyeLowVision


```text
fontawesome/Solid/EyeLowVision
```

```text
include('fontawesome/Solid/EyeLowVision')
```



| Illustration | EyeLowVision |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EyeLowVision.png) | ![illustration for EyeLowVision](../../fontawesome/Solid/EyeLowVision.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EyeLowVisionXs>`
- `<$EyeLowVisionSm>`
- `<$EyeLowVisionMd>`
- `<$EyeLowVisionLg>`





## EyeLowVision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EyeLowVision
include('fontawesome/Solid/EyeLowVision')

' renders the element
EyeLowVision('EyeLowVision', 'Eye Low Vision', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EyeLowVision
include('fontawesome/Solid/EyeLowVision')

' renders the element
EyeLowVision('EyeLowVision', 'Eye Low Vision', 'an optional tech label', 'an optional description')
@enduml
```

