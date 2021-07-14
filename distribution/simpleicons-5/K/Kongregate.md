# Kongregate


```text
simpleicons-5/K/Kongregate
```

```text
include('simpleicons-5/K/Kongregate')
```



| Illustration | Kongregate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kongregate.png) | ![illustration for Kongregate](../../simpleicons-5/K/Kongregate.Local.png) |




## Kongregate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kongregate
include('simpleicons-5/K/Kongregate')

' renders the element
Kongregate('Kongregate', 'Kongregate', 'an optional tech label')
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

' loads the Item which embeds the element Kongregate
include('simpleicons-5/K/Kongregate')

' renders the element
Kongregate('Kongregate', 'Kongregate', 'an optional tech label')
@enduml
```

