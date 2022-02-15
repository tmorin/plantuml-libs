# Nixos


```text
simpleicons-6/N/Nixos
```

```text
include('simpleicons-6/N/Nixos')
```



| Illustration | Nixos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nixos.png) | ![illustration for Nixos](../../simpleicons-6/N/Nixos.Local.png) |




## Nixos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nixos
include('simpleicons-6/N/Nixos')

' renders the element
Nixos('Nixos', 'Nixos', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nixos
include('simpleicons-6/N/Nixos')

' renders the element
Nixos('Nixos', 'Nixos', 'an optional tech label')
@enduml
```

