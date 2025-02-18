# Hetzner


```text
simpleicons-14/H/Hetzner
```

```text
include('simpleicons-14/H/Hetzner')
```



| Illustration | Hetzner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hetzner.png) | ![illustration for Hetzner](../../simpleicons-14/H/Hetzner.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HetznerXs>`
- `<$HetznerSm>`
- `<$HetznerMd>`
- `<$HetznerLg>`





## Hetzner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hetzner
include('simpleicons-14/H/Hetzner')

' renders the element
Hetzner('Hetzner', 'Hetzner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hetzner
include('simpleicons-14/H/Hetzner')

' renders the element
Hetzner('Hetzner', 'Hetzner', 'an optional tech label', 'an optional description')
@enduml
```

