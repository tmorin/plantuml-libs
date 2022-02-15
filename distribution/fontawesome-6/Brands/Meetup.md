# Meetup


```text
fontawesome-6/Brands/Meetup
```

```text
include('fontawesome-6/Brands/Meetup')
```



| Illustration | Meetup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Meetup.png) | ![illustration for Meetup](../../fontawesome-6/Brands/Meetup.Local.png) |




## Meetup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Meetup
include('fontawesome-6/Brands/Meetup')

' renders the element
Meetup('Meetup', 'Meetup', 'an optional tech label')
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

' loads the Item which embeds the element Meetup
include('fontawesome-6/Brands/Meetup')

' renders the element
Meetup('Meetup', 'Meetup', 'an optional tech label')
@enduml
```

