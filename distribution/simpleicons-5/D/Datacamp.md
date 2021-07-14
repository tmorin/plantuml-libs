# Datacamp


```text
simpleicons-5/D/Datacamp
```

```text
include('simpleicons-5/D/Datacamp')
```



| Illustration | Datacamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Datacamp.png) | ![illustration for Datacamp](../../simpleicons-5/D/Datacamp.Local.png) |




## Datacamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Datacamp
include('simpleicons-5/D/Datacamp')

' renders the element
Datacamp('Datacamp', 'Datacamp', 'an optional tech label')
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

' loads the Item which embeds the element Datacamp
include('simpleicons-5/D/Datacamp')

' renders the element
Datacamp('Datacamp', 'Datacamp', 'an optional tech label')
@enduml
```

