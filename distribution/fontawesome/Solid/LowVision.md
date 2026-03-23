# LowVision


```text
fontawesome/Solid/LowVision
```

```text
include('fontawesome/Solid/LowVision')
```



| Illustration | LowVision |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LowVision.png) | ![illustration for LowVision](../../fontawesome/Solid/LowVision.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LowVisionXs>`
- `<$LowVisionSm>`
- `<$LowVisionMd>`
- `<$LowVisionLg>`





## LowVision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LowVision
include('fontawesome/Solid/LowVision')

' renders the element
LowVision('LowVision', 'Low Vision', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LowVision
include('fontawesome/Solid/LowVision')

' renders the element
LowVision('LowVision', 'Low Vision', 'an optional tech label', 'an optional description')
@enduml
```

