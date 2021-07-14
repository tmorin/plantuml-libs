# Meetup


```text
simpleicons-5/M/Meetup
```

```text
include('simpleicons-5/M/Meetup')
```



| Illustration | Meetup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Meetup.png) | ![illustration for Meetup](../../simpleicons-5/M/Meetup.Local.png) |




## Meetup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Meetup
include('simpleicons-5/M/Meetup')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Meetup
include('simpleicons-5/M/Meetup')

' renders the element
Meetup('Meetup', 'Meetup', 'an optional tech label')
@enduml
```

