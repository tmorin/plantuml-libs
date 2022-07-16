# Theregister


```text
simpleicons-7/T/Theregister
```

```text
include('simpleicons-7/T/Theregister')
```



| Illustration | Theregister |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Theregister.png) | ![illustration for Theregister](../../simpleicons-7/T/Theregister.Local.png) |




## Theregister

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Theregister
include('simpleicons-7/T/Theregister')

' renders the element
Theregister('Theregister', 'Theregister', 'an optional tech label')
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

' loads the Item which embeds the element Theregister
include('simpleicons-7/T/Theregister')

' renders the element
Theregister('Theregister', 'Theregister', 'an optional tech label')
@enduml
```

