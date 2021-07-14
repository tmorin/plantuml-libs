# Midi


```text
simpleicons-5/M/Midi
```

```text
include('simpleicons-5/M/Midi')
```



| Illustration | Midi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Midi.png) | ![illustration for Midi](../../simpleicons-5/M/Midi.Local.png) |




## Midi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Midi
include('simpleicons-5/M/Midi')

' renders the element
Midi('Midi', 'Midi', 'an optional tech label')
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

' loads the Item which embeds the element Midi
include('simpleicons-5/M/Midi')

' renders the element
Midi('Midi', 'Midi', 'an optional tech label')
@enduml
```

