# Midi


```text
simpleicons-7/M/Midi
```

```text
include('simpleicons-7/M/Midi')
```



| Illustration | Midi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Midi.png) | ![illustration for Midi](../../simpleicons-7/M/Midi.Local.png) |




## Midi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Midi
include('simpleicons-7/M/Midi')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Midi
include('simpleicons-7/M/Midi')

' renders the element
Midi('Midi', 'Midi', 'an optional tech label')
@enduml
```

