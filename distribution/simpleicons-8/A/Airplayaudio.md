# Airplayaudio


```text
simpleicons-8/A/Airplayaudio
```

```text
include('simpleicons-8/A/Airplayaudio')
```



| Illustration | Airplayaudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Airplayaudio.png) | ![illustration for Airplayaudio](../../simpleicons-8/A/Airplayaudio.Local.png) |




## Airplayaudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Airplayaudio
include('simpleicons-8/A/Airplayaudio')

' renders the element
Airplayaudio('Airplayaudio', 'Airplayaudio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airplayaudio
include('simpleicons-8/A/Airplayaudio')

' renders the element
Airplayaudio('Airplayaudio', 'Airplayaudio', 'an optional tech label', 'an optional description')
@enduml
```

