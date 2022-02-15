# EarDeaf


```text
fontawesome-6/Solid/EarDeaf
```

```text
include('fontawesome-6/Solid/EarDeaf')
```



| Illustration | EarDeaf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/EarDeaf.png) | ![illustration for EarDeaf](../../fontawesome-6/Solid/EarDeaf.Local.png) |




## EarDeaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EarDeaf
include('fontawesome-6/Solid/EarDeaf')

' renders the element
EarDeaf('EarDeaf', 'Ear Deaf', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EarDeaf
include('fontawesome-6/Solid/EarDeaf')

' renders the element
EarDeaf('EarDeaf', 'Ear Deaf', 'an optional tech label')
@enduml
```

