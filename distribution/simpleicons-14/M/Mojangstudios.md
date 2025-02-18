# Mojangstudios


```text
simpleicons-14/M/Mojangstudios
```

```text
include('simpleicons-14/M/Mojangstudios')
```



| Illustration | Mojangstudios |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mojangstudios.png) | ![illustration for Mojangstudios](../../simpleicons-14/M/Mojangstudios.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MojangstudiosXs>`
- `<$MojangstudiosSm>`
- `<$MojangstudiosMd>`
- `<$MojangstudiosLg>`





## Mojangstudios

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mojangstudios
include('simpleicons-14/M/Mojangstudios')

' renders the element
Mojangstudios('Mojangstudios', 'Mojangstudios', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mojangstudios
include('simpleicons-14/M/Mojangstudios')

' renders the element
Mojangstudios('Mojangstudios', 'Mojangstudios', 'an optional tech label', 'an optional description')
@enduml
```

