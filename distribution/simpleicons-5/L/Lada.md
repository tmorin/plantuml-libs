# Lada


```text
simpleicons-5/L/Lada
```

```text
include('simpleicons-5/L/Lada')
```



| Illustration | Lada |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lada.png) | ![illustration for Lada](../../simpleicons-5/L/Lada.Local.png) |




## Lada

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lada
include('simpleicons-5/L/Lada')

' renders the element
Lada('Lada', 'Lada', 'an optional tech label')
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

' loads the Item which embeds the element Lada
include('simpleicons-5/L/Lada')

' renders the element
Lada('Lada', 'Lada', 'an optional tech label')
@enduml
```

