# Strava


```text
fontawesome-5/Brands/Strava
```

```text
include('fontawesome-5/Brands/Strava')
```



| Illustration | Strava |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Strava.png) | ![illustration for Strava](../../fontawesome-5/Brands/Strava.Local.png) |




## Strava

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Strava
include('fontawesome-5/Brands/Strava')

' renders the element
Strava('Strava', 'Strava', 'an optional tech label')
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

' loads the Item which embeds the element Strava
include('fontawesome-5/Brands/Strava')

' renders the element
Strava('Strava', 'Strava', 'an optional tech label')
@enduml
```

