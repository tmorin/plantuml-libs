# Strava


```text
fontawesome-6/Brands/Strava
```

```text
include('fontawesome-6/Brands/Strava')
```



| Illustration | Strava |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Strava.png) | ![illustration for Strava](../../fontawesome-6/Brands/Strava.Local.png) |




## Strava

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Strava
include('fontawesome-6/Brands/Strava')

' renders the element
Strava('Strava', 'Strava', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Strava
include('fontawesome-6/Brands/Strava')

' renders the element
Strava('Strava', 'Strava', 'an optional tech label', 'an optional description')
@enduml
```

