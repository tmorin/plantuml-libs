# Deno


```text
simpleicons/D/Deno
```

```text
include('simpleicons/D/Deno')
```



| Illustration | Deno |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Deno.png) | ![illustration for Deno](../../simpleicons/D/Deno.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DenoXs>`
- `<$DenoSm>`
- `<$DenoMd>`
- `<$DenoLg>`





## Deno

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Deno
include('simpleicons/D/Deno')

' renders the element
Deno('Deno', 'Deno', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Deno
include('simpleicons/D/Deno')

' renders the element
Deno('Deno', 'Deno', 'an optional tech label', 'an optional description')
@enduml
```

