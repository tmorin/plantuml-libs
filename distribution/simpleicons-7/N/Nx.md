# Nx


```text
simpleicons-7/N/Nx
```

```text
include('simpleicons-7/N/Nx')
```



| Illustration | Nx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nx.png) | ![illustration for Nx](../../simpleicons-7/N/Nx.Local.png) |




## Nx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nx
include('simpleicons-7/N/Nx')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nx
include('simpleicons-7/N/Nx')

' renders the element
Nx('Nx', 'Nx', 'an optional tech label', 'an optional description')
@enduml
```

