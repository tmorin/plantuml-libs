# EuroSign


```text
fontawesome-6/Solid/EuroSign
```

```text
include('fontawesome-6/Solid/EuroSign')
```



| Illustration | EuroSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/EuroSign.png) | ![illustration for EuroSign](../../fontawesome-6/Solid/EuroSign.Local.png) |




## EuroSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EuroSign
include('fontawesome-6/Solid/EuroSign')

' renders the element
EuroSign('EuroSign', 'Euro Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EuroSign
include('fontawesome-6/Solid/EuroSign')

' renders the element
EuroSign('EuroSign', 'Euro Sign', 'an optional tech label', 'an optional description')
@enduml
```

