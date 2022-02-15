# Semaphoreci


```text
simpleicons-6/S/Semaphoreci
```

```text
include('simpleicons-6/S/Semaphoreci')
```



| Illustration | Semaphoreci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Semaphoreci.png) | ![illustration for Semaphoreci](../../simpleicons-6/S/Semaphoreci.Local.png) |




## Semaphoreci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Semaphoreci
include('simpleicons-6/S/Semaphoreci')

' renders the element
Semaphoreci('Semaphoreci', 'Semaphoreci', 'an optional tech label')
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

' loads the Item which embeds the element Semaphoreci
include('simpleicons-6/S/Semaphoreci')

' renders the element
Semaphoreci('Semaphoreci', 'Semaphoreci', 'an optional tech label')
@enduml
```

