# Fila


```text
simpleicons-5/F/Fila
```

```text
include('simpleicons-5/F/Fila')
```



| Illustration | Fila |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fila.png) | ![illustration for Fila](../../simpleicons-5/F/Fila.Local.png) |




## Fila

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fila
include('simpleicons-5/F/Fila')

' renders the element
Fila('Fila', 'Fila', 'an optional tech label')
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

' loads the Item which embeds the element Fila
include('simpleicons-5/F/Fila')

' renders the element
Fila('Fila', 'Fila', 'an optional tech label')
@enduml
```

