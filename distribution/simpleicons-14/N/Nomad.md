# Nomad


```text
simpleicons-14/N/Nomad
```

```text
include('simpleicons-14/N/Nomad')
```



| Illustration | Nomad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nomad.png) | ![illustration for Nomad](../../simpleicons-14/N/Nomad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NomadXs>`
- `<$NomadSm>`
- `<$NomadMd>`
- `<$NomadLg>`





## Nomad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nomad
include('simpleicons-14/N/Nomad')

' renders the element
Nomad('Nomad', 'Nomad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nomad
include('simpleicons-14/N/Nomad')

' renders the element
Nomad('Nomad', 'Nomad', 'an optional tech label', 'an optional description')
@enduml
```

