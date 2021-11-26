# FistRaised


```text
fontawesome-5/Solid/FistRaised
```

```text
include('fontawesome-5/Solid/FistRaised')
```



| Illustration | FistRaised |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FistRaised.png) | ![illustration for FistRaised](../../fontawesome-5/Solid/FistRaised.Local.png) |




## FistRaised

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FistRaised
include('fontawesome-5/Solid/FistRaised')

' renders the element
FistRaised('FistRaised', 'Fist Raised', 'an optional tech label')
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

' loads the Item which embeds the element FistRaised
include('fontawesome-5/Solid/FistRaised')

' renders the element
FistRaised('FistRaised', 'Fist Raised', 'an optional tech label')
@enduml
```

