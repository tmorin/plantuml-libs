# Aircanada


```text
simpleicons-7/A/Aircanada
```

```text
include('simpleicons-7/A/Aircanada')
```



| Illustration | Aircanada |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Aircanada.png) | ![illustration for Aircanada](../../simpleicons-7/A/Aircanada.Local.png) |




## Aircanada

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Aircanada
include('simpleicons-7/A/Aircanada')

' renders the element
Aircanada('Aircanada', 'Aircanada', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Aircanada
include('simpleicons-7/A/Aircanada')

' renders the element
Aircanada('Aircanada', 'Aircanada', 'an optional tech label', 'an optional description')
@enduml
```

