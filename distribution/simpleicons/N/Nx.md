# Nx


```text
simpleicons/N/Nx
```

```text
include('simpleicons/N/Nx')
```



| Illustration | Nx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nx.png) | ![illustration for Nx](../../simpleicons/N/Nx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NxXs>`
- `<$NxSm>`
- `<$NxMd>`
- `<$NxLg>`





## Nx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nx
include('simpleicons/N/Nx')

' renders the element
Nx('Nx', 'Nx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nx
include('simpleicons/N/Nx')

' renders the element
Nx('Nx', 'Nx', 'an optional tech label', 'an optional description')
@enduml
```

