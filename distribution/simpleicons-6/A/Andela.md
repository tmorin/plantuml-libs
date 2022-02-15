# Andela


```text
simpleicons-6/A/Andela
```

```text
include('simpleicons-6/A/Andela')
```



| Illustration | Andela |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Andela.png) | ![illustration for Andela](../../simpleicons-6/A/Andela.Local.png) |




## Andela

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Andela
include('simpleicons-6/A/Andela')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Andela
include('simpleicons-6/A/Andela')

' renders the element
Andela('Andela', 'Andela', 'an optional tech label')
@enduml
```

