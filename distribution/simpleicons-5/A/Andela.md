# Andela


```text
simpleicons-5/A/Andela
```

```text
include('simpleicons-5/A/Andela')
```



| Illustration | Andela |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Andela.png) | ![illustration for Andela](../../simpleicons-5/A/Andela.Local.png) |




## Andela

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Andela
include('simpleicons-5/A/Andela')

' renders the element
Andela('Andela', 'Andela', 'an optional tech label')
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

' loads the Item which embeds the element Andela
include('simpleicons-5/A/Andela')

' renders the element
Andela('Andela', 'Andela', 'an optional tech label')
@enduml
```

