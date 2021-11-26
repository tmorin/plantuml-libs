# EyeDropper


```text
fontawesome-5/Solid/EyeDropper
```

```text
include('fontawesome-5/Solid/EyeDropper')
```



| Illustration | EyeDropper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/EyeDropper.png) | ![illustration for EyeDropper](../../fontawesome-5/Solid/EyeDropper.Local.png) |




## EyeDropper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element EyeDropper
include('fontawesome-5/Solid/EyeDropper')

' renders the element
EyeDropper('EyeDropper', 'Eye Dropper', 'an optional tech label')
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

' loads the Item which embeds the element EyeDropper
include('fontawesome-5/Solid/EyeDropper')

' renders the element
EyeDropper('EyeDropper', 'Eye Dropper', 'an optional tech label')
@enduml
```

