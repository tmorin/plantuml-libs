# Bosch


```text
simpleicons-5/B/Bosch
```

```text
include('simpleicons-5/B/Bosch')
```



| Illustration | Bosch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bosch.png) | ![illustration for Bosch](../../simpleicons-5/B/Bosch.Local.png) |




## Bosch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bosch
include('simpleicons-5/B/Bosch')

' renders the element
Bosch('Bosch', 'Bosch', 'an optional tech label')
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

' loads the Item which embeds the element Bosch
include('simpleicons-5/B/Bosch')

' renders the element
Bosch('Bosch', 'Bosch', 'an optional tech label')
@enduml
```

