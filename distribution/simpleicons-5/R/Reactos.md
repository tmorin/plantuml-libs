# Reactos


```text
simpleicons-5/R/Reactos
```

```text
include('simpleicons-5/R/Reactos')
```



| Illustration | Reactos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Reactos.png) | ![illustration for Reactos](../../simpleicons-5/R/Reactos.Local.png) |




## Reactos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reactos
include('simpleicons-5/R/Reactos')

' renders the element
Reactos('Reactos', 'Reactos', 'an optional tech label')
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

' loads the Item which embeds the element Reactos
include('simpleicons-5/R/Reactos')

' renders the element
Reactos('Reactos', 'Reactos', 'an optional tech label')
@enduml
```

