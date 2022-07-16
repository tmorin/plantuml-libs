# Ocaml


```text
simpleicons-7/O/Ocaml
```

```text
include('simpleicons-7/O/Ocaml')
```



| Illustration | Ocaml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Ocaml.png) | ![illustration for Ocaml](../../simpleicons-7/O/Ocaml.Local.png) |




## Ocaml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ocaml
include('simpleicons-7/O/Ocaml')

' renders the element
Ocaml('Ocaml', 'Ocaml', 'an optional tech label')
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

' loads the Item which embeds the element Ocaml
include('simpleicons-7/O/Ocaml')

' renders the element
Ocaml('Ocaml', 'Ocaml', 'an optional tech label')
@enduml
```

