# Qiskit


```text
simpleicons-5/Q/Qiskit
```

```text
include('simpleicons-5/Q/Qiskit')
```



| Illustration | Qiskit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Qiskit.png) | ![illustration for Qiskit](../../simpleicons-5/Q/Qiskit.Local.png) |




## Qiskit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Qiskit
include('simpleicons-5/Q/Qiskit')

' renders the element
Qiskit('Qiskit', 'Qiskit', 'an optional tech label')
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

' loads the Item which embeds the element Qiskit
include('simpleicons-5/Q/Qiskit')

' renders the element
Qiskit('Qiskit', 'Qiskit', 'an optional tech label')
@enduml
```

