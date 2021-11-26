# LowVision


```text
fontawesome-5/Solid/LowVision
```

```text
include('fontawesome-5/Solid/LowVision')
```



| Illustration | LowVision |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LowVision.png) | ![illustration for LowVision](../../fontawesome-5/Solid/LowVision.Local.png) |




## LowVision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LowVision
include('fontawesome-5/Solid/LowVision')

' renders the element
LowVision('LowVision', 'Low Vision', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LowVision
include('fontawesome-5/Solid/LowVision')

' renders the element
LowVision('LowVision', 'Low Vision', 'an optional tech label')
@enduml
```

