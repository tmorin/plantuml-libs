# Affinity


```text
simpleicons-7/A/Affinity
```

```text
include('simpleicons-7/A/Affinity')
```



| Illustration | Affinity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Affinity.png) | ![illustration for Affinity](../../simpleicons-7/A/Affinity.Local.png) |




## Affinity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Affinity
include('simpleicons-7/A/Affinity')

' renders the element
Affinity('Affinity', 'Affinity', 'an optional tech label')
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

' loads the Item which embeds the element Affinity
include('simpleicons-7/A/Affinity')

' renders the element
Affinity('Affinity', 'Affinity', 'an optional tech label')
@enduml
```

