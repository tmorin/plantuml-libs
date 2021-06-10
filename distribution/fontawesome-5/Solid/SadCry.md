# SadCry


```text
fontawesome-5/Solid/SadCry
```

```text
include('fontawesome-5/Solid/SadCry')
```



| Illustration | SadCry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SadCry.png) | ![illustration for SadCry](../../fontawesome-5/Solid/SadCry.Local.png) |




## SadCry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SadCry
include('fontawesome-5/Solid/SadCry')

' renders the element
SadCry('SadCry', 'Sad Cry', 'an optional tech label')
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

' loads the Item which embeds the element SadCry
include('fontawesome-5/Solid/SadCry')

' renders the element
SadCry('SadCry', 'Sad Cry', 'an optional tech label')
@enduml
```

