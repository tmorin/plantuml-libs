# Komoot


```text
simpleicons-5/K/Komoot
```

```text
include('simpleicons-5/K/Komoot')
```



| Illustration | Komoot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Komoot.png) | ![illustration for Komoot](../../simpleicons-5/K/Komoot.Local.png) |




## Komoot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Komoot
include('simpleicons-5/K/Komoot')

' renders the element
Komoot('Komoot', 'Komoot', 'an optional tech label')
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

' loads the Item which embeds the element Komoot
include('simpleicons-5/K/Komoot')

' renders the element
Komoot('Komoot', 'Komoot', 'an optional tech label')
@enduml
```

