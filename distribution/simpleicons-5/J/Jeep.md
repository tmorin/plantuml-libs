# Jeep


```text
simpleicons-5/J/Jeep
```

```text
include('simpleicons-5/J/Jeep')
```



| Illustration | Jeep |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jeep.png) | ![illustration for Jeep](../../simpleicons-5/J/Jeep.Local.png) |




## Jeep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jeep
include('simpleicons-5/J/Jeep')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jeep
include('simpleicons-5/J/Jeep')

' renders the element
Jeep('Jeep', 'Jeep', 'an optional tech label')
@enduml
```

