# Nx


```text
simpleicons-5/N/Nx
```

```text
include('simpleicons-5/N/Nx')
```



| Illustration | Nx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nx.png) | ![illustration for Nx](../../simpleicons-5/N/Nx.Local.png) |




## Nx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nx
include('simpleicons-5/N/Nx')

' renders the element
Nx('Nx', 'Nx', 'an optional tech label')
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

' loads the Item which embeds the element Nx
include('simpleicons-5/N/Nx')

' renders the element
Nx('Nx', 'Nx', 'an optional tech label')
@enduml
```

