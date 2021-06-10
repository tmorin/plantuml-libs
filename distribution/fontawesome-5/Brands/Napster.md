# Napster


```text
fontawesome-5/Brands/Napster
```

```text
include('fontawesome-5/Brands/Napster')
```



| Illustration | Napster |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Napster.png) | ![illustration for Napster](../../fontawesome-5/Brands/Napster.Local.png) |




## Napster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Napster
include('fontawesome-5/Brands/Napster')

' renders the element
Napster('Napster', 'Napster', 'an optional tech label')
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

' loads the Item which embeds the element Napster
include('fontawesome-5/Brands/Napster')

' renders the element
Napster('Napster', 'Napster', 'an optional tech label')
@enduml
```

