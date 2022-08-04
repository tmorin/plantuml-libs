# Andela


```text
simpleicons-7/A/Andela
```

```text
include('simpleicons-7/A/Andela')
```



| Illustration | Andela |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Andela.png) | ![illustration for Andela](../../simpleicons-7/A/Andela.Local.png) |




## Andela

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Andela
include('simpleicons-7/A/Andela')

' renders the element
Andela('Andela', 'Andela', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Andela
include('simpleicons-7/A/Andela')

' renders the element
Andela('Andela', 'Andela', 'an optional tech label', 'an optional description')
@enduml
```

