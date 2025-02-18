# Ocaml


```text
simpleicons-14/O/Ocaml
```

```text
include('simpleicons-14/O/Ocaml')
```



| Illustration | Ocaml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Ocaml.png) | ![illustration for Ocaml](../../simpleicons-14/O/Ocaml.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OcamlXs>`
- `<$OcamlSm>`
- `<$OcamlMd>`
- `<$OcamlLg>`





## Ocaml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ocaml
include('simpleicons-14/O/Ocaml')

' renders the element
Ocaml('Ocaml', 'Ocaml', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ocaml
include('simpleicons-14/O/Ocaml')

' renders the element
Ocaml('Ocaml', 'Ocaml', 'an optional tech label', 'an optional description')
@enduml
```

