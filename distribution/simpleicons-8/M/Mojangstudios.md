# Mojangstudios


```text
simpleicons-8/M/Mojangstudios
```

```text
include('simpleicons-8/M/Mojangstudios')
```



| Illustration | Mojangstudios |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mojangstudios.png) | ![illustration for Mojangstudios](../../simpleicons-8/M/Mojangstudios.Local.png) |




## Mojangstudios

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mojangstudios
include('simpleicons-8/M/Mojangstudios')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mojangstudios
include('simpleicons-8/M/Mojangstudios')

' renders the element
Mojangstudios('Mojangstudios', 'Mojangstudios', 'an optional tech label', 'an optional description')
@enduml
```

