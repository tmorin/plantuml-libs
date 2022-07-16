# Eventstore


```text
simpleicons-7/E/Eventstore
```

```text
include('simpleicons-7/E/Eventstore')
```



| Illustration | Eventstore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Eventstore.png) | ![illustration for Eventstore](../../simpleicons-7/E/Eventstore.Local.png) |




## Eventstore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Eventstore
include('simpleicons-7/E/Eventstore')

' renders the element
Eventstore('Eventstore', 'Eventstore', 'an optional tech label')
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

' loads the Item which embeds the element Eventstore
include('simpleicons-7/E/Eventstore')

' renders the element
Eventstore('Eventstore', 'Eventstore', 'an optional tech label')
@enduml
```

