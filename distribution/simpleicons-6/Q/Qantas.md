# Qantas


```text
simpleicons-6/Q/Qantas
```

```text
include('simpleicons-6/Q/Qantas')
```



| Illustration | Qantas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Q/Qantas.png) | ![illustration for Qantas](../../simpleicons-6/Q/Qantas.Local.png) |




## Qantas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Qantas
include('simpleicons-6/Q/Qantas')

' renders the element
Qantas('Qantas', 'Qantas', 'an optional tech label')
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

' loads the Item which embeds the element Qantas
include('simpleicons-6/Q/Qantas')

' renders the element
Qantas('Qantas', 'Qantas', 'an optional tech label')
@enduml
```

