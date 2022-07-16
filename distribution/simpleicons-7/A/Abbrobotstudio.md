# Abbrobotstudio


```text
simpleicons-7/A/Abbrobotstudio
```

```text
include('simpleicons-7/A/Abbrobotstudio')
```



| Illustration | Abbrobotstudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Abbrobotstudio.png) | ![illustration for Abbrobotstudio](../../simpleicons-7/A/Abbrobotstudio.Local.png) |




## Abbrobotstudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Abbrobotstudio
include('simpleicons-7/A/Abbrobotstudio')

' renders the element
Abbrobotstudio('Abbrobotstudio', 'Abbrobotstudio', 'an optional tech label')
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

' loads the Item which embeds the element Abbrobotstudio
include('simpleicons-7/A/Abbrobotstudio')

' renders the element
Abbrobotstudio('Abbrobotstudio', 'Abbrobotstudio', 'an optional tech label')
@enduml
```

