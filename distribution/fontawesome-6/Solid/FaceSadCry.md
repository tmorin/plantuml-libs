# FaceSadCry


```text
fontawesome-6/Solid/FaceSadCry
```

```text
include('fontawesome-6/Solid/FaceSadCry')
```



| Illustration | FaceSadCry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceSadCry.png) | ![illustration for FaceSadCry](../../fontawesome-6/Solid/FaceSadCry.Local.png) |




## FaceSadCry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceSadCry
include('fontawesome-6/Solid/FaceSadCry')

' renders the element
FaceSadCry('FaceSadCry', 'Face Sad Cry', 'an optional tech label')
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

' loads the Item which embeds the element FaceSadCry
include('fontawesome-6/Solid/FaceSadCry')

' renders the element
FaceSadCry('FaceSadCry', 'Face Sad Cry', 'an optional tech label')
@enduml
```

