# Fila


```text
simpleicons-6/F/Fila
```

```text
include('simpleicons-6/F/Fila')
```



| Illustration | Fila |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fila.png) | ![illustration for Fila](../../simpleicons-6/F/Fila.Local.png) |




## Fila

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fila
include('simpleicons-6/F/Fila')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fila
include('simpleicons-6/F/Fila')

' renders the element
Fila('Fila', 'Fila', 'an optional tech label')
@enduml
```

