# Talos


```text
simpleicons-14/T/Talos
```

```text
include('simpleicons-14/T/Talos')
```



| Illustration | Talos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Talos.png) | ![illustration for Talos](../../simpleicons-14/T/Talos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TalosXs>`
- `<$TalosSm>`
- `<$TalosMd>`
- `<$TalosLg>`





## Talos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Talos
include('simpleicons-14/T/Talos')

' renders the element
Talos('Talos', 'Talos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Talos
include('simpleicons-14/T/Talos')

' renders the element
Talos('Talos', 'Talos', 'an optional tech label', 'an optional description')
@enduml
```

