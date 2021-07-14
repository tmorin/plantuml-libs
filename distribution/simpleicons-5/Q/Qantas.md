# Qantas


```text
simpleicons-5/Q/Qantas
```

```text
include('simpleicons-5/Q/Qantas')
```



| Illustration | Qantas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Qantas.png) | ![illustration for Qantas](../../simpleicons-5/Q/Qantas.Local.png) |




## Qantas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Qantas
include('simpleicons-5/Q/Qantas')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Qantas
include('simpleicons-5/Q/Qantas')

' renders the element
Qantas('Qantas', 'Qantas', 'an optional tech label')
@enduml
```

