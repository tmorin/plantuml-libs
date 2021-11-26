# Twitch


```text
fontawesome-5/Brands/Twitch
```

```text
include('fontawesome-5/Brands/Twitch')
```



| Illustration | Twitch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Twitch.png) | ![illustration for Twitch](../../fontawesome-5/Brands/Twitch.Local.png) |




## Twitch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Twitch
include('fontawesome-5/Brands/Twitch')

' renders the element
Twitch('Twitch', 'Twitch', 'an optional tech label')
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

' loads the Item which embeds the element Twitch
include('fontawesome-5/Brands/Twitch')

' renders the element
Twitch('Twitch', 'Twitch', 'an optional tech label')
@enduml
```

