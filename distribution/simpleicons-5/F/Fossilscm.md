# Fossilscm


```text
simpleicons-5/F/Fossilscm
```

```text
include('simpleicons-5/F/Fossilscm')
```



| Illustration | Fossilscm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fossilscm.png) | ![illustration for Fossilscm](../../simpleicons-5/F/Fossilscm.Local.png) |




## Fossilscm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fossilscm
include('simpleicons-5/F/Fossilscm')

' renders the element
Fossilscm('Fossilscm', 'Fossilscm', 'an optional tech label')
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

' loads the Item which embeds the element Fossilscm
include('simpleicons-5/F/Fossilscm')

' renders the element
Fossilscm('Fossilscm', 'Fossilscm', 'an optional tech label')
@enduml
```

