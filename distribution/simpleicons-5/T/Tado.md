# Tado


```text
simpleicons-5/T/Tado
```

```text
include('simpleicons-5/T/Tado')
```



| Illustration | Tado |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tado.png) | ![illustration for Tado](../../simpleicons-5/T/Tado.Local.png) |




## Tado

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tado
include('simpleicons-5/T/Tado')

' renders the element
Tado('Tado', 'Tado', 'an optional tech label')
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

' loads the Item which embeds the element Tado
include('simpleicons-5/T/Tado')

' renders the element
Tado('Tado', 'Tado', 'an optional tech label')
@enduml
```

