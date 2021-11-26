# Playstation


```text
fontawesome-5/Brands/Playstation
```

```text
include('fontawesome-5/Brands/Playstation')
```



| Illustration | Playstation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Playstation.png) | ![illustration for Playstation](../../fontawesome-5/Brands/Playstation.Local.png) |




## Playstation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Playstation
include('fontawesome-5/Brands/Playstation')

' renders the element
Playstation('Playstation', 'Playstation', 'an optional tech label')
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

' loads the Item which embeds the element Playstation
include('fontawesome-5/Brands/Playstation')

' renders the element
Playstation('Playstation', 'Playstation', 'an optional tech label')
@enduml
```

