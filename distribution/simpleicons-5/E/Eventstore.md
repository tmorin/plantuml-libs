# Eventstore


```text
simpleicons-5/E/Eventstore
```

```text
include('simpleicons-5/E/Eventstore')
```



| Illustration | Eventstore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Eventstore.png) | ![illustration for Eventstore](../../simpleicons-5/E/Eventstore.Local.png) |




## Eventstore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Eventstore
include('simpleicons-5/E/Eventstore')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Eventstore
include('simpleicons-5/E/Eventstore')

' renders the element
Eventstore('Eventstore', 'Eventstore', 'an optional tech label')
@enduml
```

