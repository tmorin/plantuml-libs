# Qubesos


```text
simpleicons-5/Q/Qubesos
```

```text
include('simpleicons-5/Q/Qubesos')
```



| Illustration | Qubesos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Qubesos.png) | ![illustration for Qubesos](../../simpleicons-5/Q/Qubesos.Local.png) |




## Qubesos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Qubesos
include('simpleicons-5/Q/Qubesos')

' renders the element
Qubesos('Qubesos', 'Qubesos', 'an optional tech label')
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

' loads the Item which embeds the element Qubesos
include('simpleicons-5/Q/Qubesos')

' renders the element
Qubesos('Qubesos', 'Qubesos', 'an optional tech label')
@enduml
```

