# Jeep


```text
simpleicons-6/J/Jeep
```

```text
include('simpleicons-6/J/Jeep')
```



| Illustration | Jeep |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/J/Jeep.png) | ![illustration for Jeep](../../simpleicons-6/J/Jeep.Local.png) |




## Jeep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Jeep
include('simpleicons-6/J/Jeep')

' renders the element
Jeep('Jeep', 'Jeep', 'an optional tech label')
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

' loads the Item which embeds the element Jeep
include('simpleicons-6/J/Jeep')

' renders the element
Jeep('Jeep', 'Jeep', 'an optional tech label')
@enduml
```

