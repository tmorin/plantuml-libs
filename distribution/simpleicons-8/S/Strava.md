# Strava


```text
simpleicons-8/S/Strava
```

```text
include('simpleicons-8/S/Strava')
```



| Illustration | Strava |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Strava.png) | ![illustration for Strava](../../simpleicons-8/S/Strava.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StravaXs>`
- `<$StravaSm>`
- `<$StravaMd>`
- `<$StravaLg>`





## Strava

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Strava
include('simpleicons-8/S/Strava')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Strava
include('simpleicons-8/S/Strava')

' renders the element
Strava('Strava', 'Strava', 'an optional tech label', 'an optional description')
@enduml
```

