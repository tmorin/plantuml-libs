# Openfaas


```text
simpleicons-5/O/Openfaas
```

```text
include('simpleicons-5/O/Openfaas')
```



| Illustration | Openfaas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openfaas.png) | ![illustration for Openfaas](../../simpleicons-5/O/Openfaas.Local.png) |




## Openfaas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openfaas
include('simpleicons-5/O/Openfaas')

' renders the element
Openfaas('Openfaas', 'Openfaas', 'an optional tech label')
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

' loads the Item which embeds the element Openfaas
include('simpleicons-5/O/Openfaas')

' renders the element
Openfaas('Openfaas', 'Openfaas', 'an optional tech label')
@enduml
```

