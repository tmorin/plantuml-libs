# Bosch


```text
simpleicons-6/B/Bosch
```

```text
include('simpleicons-6/B/Bosch')
```



| Illustration | Bosch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bosch.png) | ![illustration for Bosch](../../simpleicons-6/B/Bosch.Local.png) |




## Bosch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bosch
include('simpleicons-6/B/Bosch')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bosch
include('simpleicons-6/B/Bosch')

' renders the element
Bosch('Bosch', 'Bosch', 'an optional tech label')
@enduml
```

