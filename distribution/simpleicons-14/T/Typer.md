# Typer


```text
simpleicons-14/T/Typer
```

```text
include('simpleicons-14/T/Typer')
```



| Illustration | Typer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Typer.png) | ![illustration for Typer](../../simpleicons-14/T/Typer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TyperXs>`
- `<$TyperSm>`
- `<$TyperMd>`
- `<$TyperLg>`





## Typer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Typer
include('simpleicons-14/T/Typer')

' renders the element
Typer('Typer', 'Typer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Typer
include('simpleicons-14/T/Typer')

' renders the element
Typer('Typer', 'Typer', 'an optional tech label', 'an optional description')
@enduml
```

