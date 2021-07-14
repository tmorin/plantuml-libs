# Unilever


```text
simpleicons-5/U/Unilever
```

```text
include('simpleicons-5/U/Unilever')
```



| Illustration | Unilever |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Unilever.png) | ![illustration for Unilever](../../simpleicons-5/U/Unilever.Local.png) |




## Unilever

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Unilever
include('simpleicons-5/U/Unilever')

' renders the element
Unilever('Unilever', 'Unilever', 'an optional tech label')
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

' loads the Item which embeds the element Unilever
include('simpleicons-5/U/Unilever')

' renders the element
Unilever('Unilever', 'Unilever', 'an optional tech label')
@enduml
```

