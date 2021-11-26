# Chromecast


```text
fontawesome-5/Brands/Chromecast
```

```text
include('fontawesome-5/Brands/Chromecast')
```



| Illustration | Chromecast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Chromecast.png) | ![illustration for Chromecast](../../fontawesome-5/Brands/Chromecast.Local.png) |




## Chromecast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Chromecast
include('fontawesome-5/Brands/Chromecast')

' renders the element
Chromecast('Chromecast', 'Chromecast', 'an optional tech label')
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

' loads the Item which embeds the element Chromecast
include('fontawesome-5/Brands/Chromecast')

' renders the element
Chromecast('Chromecast', 'Chromecast', 'an optional tech label')
@enduml
```

