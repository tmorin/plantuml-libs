# Reactos


```text
simpleicons-7/R/Reactos
```

```text
include('simpleicons-7/R/Reactos')
```



| Illustration | Reactos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Reactos.png) | ![illustration for Reactos](../../simpleicons-7/R/Reactos.Local.png) |




## Reactos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Reactos
include('simpleicons-7/R/Reactos')

' renders the element
Reactos('Reactos', 'Reactos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reactos
include('simpleicons-7/R/Reactos')

' renders the element
Reactos('Reactos', 'Reactos', 'an optional tech label', 'an optional description')
@enduml
```

