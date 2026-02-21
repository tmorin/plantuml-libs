# Flux


```text
simpleicons/F/Flux
```

```text
include('simpleicons/F/Flux')
```



| Illustration | Flux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Flux.png) | ![illustration for Flux](../../simpleicons/F/Flux.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flux
include('simpleicons/F/Flux')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flux
include('simpleicons/F/Flux')

' renders the element
Flux('Flux', 'Flux', 'an optional tech label', 'an optional description')
@enduml
```

