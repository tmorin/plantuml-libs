# Stimulus


```text
simpleicons-5/S/Stimulus
```

```text
include('simpleicons-5/S/Stimulus')
```



| Illustration | Stimulus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Stimulus.png) | ![illustration for Stimulus](../../simpleicons-5/S/Stimulus.Local.png) |




## Stimulus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Stimulus
include('simpleicons-5/S/Stimulus')

' renders the element
Stimulus('Stimulus', 'Stimulus', 'an optional tech label')
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

' loads the Item which embeds the element Stimulus
include('simpleicons-5/S/Stimulus')

' renders the element
Stimulus('Stimulus', 'Stimulus', 'an optional tech label')
@enduml
```

