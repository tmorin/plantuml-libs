# Flux


```text
simpleicons-14/F/Flux
```

```text
include('simpleicons-14/F/Flux')
```



| Illustration | Flux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Flux.png) | ![illustration for Flux](../../simpleicons-14/F/Flux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FluxXs>`
- `<$FluxSm>`
- `<$FluxMd>`
- `<$FluxLg>`





## Flux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Flux
include('simpleicons-14/F/Flux')

' renders the element
Flux('Flux', 'Flux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flux
include('simpleicons-14/F/Flux')

' renders the element
Flux('Flux', 'Flux', 'an optional tech label', 'an optional description')
@enduml
```

