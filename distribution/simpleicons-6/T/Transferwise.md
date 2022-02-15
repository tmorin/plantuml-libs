# Transferwise


```text
simpleicons-6/T/Transferwise
```

```text
include('simpleicons-6/T/Transferwise')
```



| Illustration | Transferwise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Transferwise.png) | ![illustration for Transferwise](../../simpleicons-6/T/Transferwise.Local.png) |




## Transferwise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Transferwise
include('simpleicons-6/T/Transferwise')

' renders the element
Transferwise('Transferwise', 'Transferwise', 'an optional tech label')
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

' loads the Item which embeds the element Transferwise
include('simpleicons-6/T/Transferwise')

' renders the element
Transferwise('Transferwise', 'Transferwise', 'an optional tech label')
@enduml
```

