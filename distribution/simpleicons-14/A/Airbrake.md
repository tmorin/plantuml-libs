# Airbrake


```text
simpleicons-14/A/Airbrake
```

```text
include('simpleicons-14/A/Airbrake')
```



| Illustration | Airbrake |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Airbrake.png) | ![illustration for Airbrake](../../simpleicons-14/A/Airbrake.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirbrakeXs>`
- `<$AirbrakeSm>`
- `<$AirbrakeMd>`
- `<$AirbrakeLg>`





## Airbrake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airbrake
include('simpleicons-14/A/Airbrake')

' renders the element
Airbrake('Airbrake', 'Airbrake', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airbrake
include('simpleicons-14/A/Airbrake')

' renders the element
Airbrake('Airbrake', 'Airbrake', 'an optional tech label', 'an optional description')
@enduml
```

