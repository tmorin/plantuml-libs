# SkiingNordic


```text
fontawesome-5/Solid/SkiingNordic
```

```text
include('fontawesome-5/Solid/SkiingNordic')
```



| Illustration | SkiingNordic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SkiingNordic.png) | ![illustration for SkiingNordic](../../fontawesome-5/Solid/SkiingNordic.Local.png) |




## SkiingNordic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SkiingNordic
include('fontawesome-5/Solid/SkiingNordic')

' renders the element
SkiingNordic('SkiingNordic', 'Skiing Nordic', 'an optional tech label')
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

' loads the Item which embeds the element SkiingNordic
include('fontawesome-5/Solid/SkiingNordic')

' renders the element
SkiingNordic('SkiingNordic', 'Skiing Nordic', 'an optional tech label')
@enduml
```

