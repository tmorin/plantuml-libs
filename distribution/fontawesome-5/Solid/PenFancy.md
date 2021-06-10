# PenFancy


```text
fontawesome-5/Solid/PenFancy
```

```text
include('fontawesome-5/Solid/PenFancy')
```



| Illustration | PenFancy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PenFancy.png) | ![illustration for PenFancy](../../fontawesome-5/Solid/PenFancy.Local.png) |




## PenFancy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PenFancy
include('fontawesome-5/Solid/PenFancy')

' renders the element
PenFancy('PenFancy', 'Pen Fancy', 'an optional tech label')
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

' loads the Item which embeds the element PenFancy
include('fontawesome-5/Solid/PenFancy')

' renders the element
PenFancy('PenFancy', 'Pen Fancy', 'an optional tech label')
@enduml
```

