# Digitalocean


```text
simpleicons-14/D/Digitalocean
```

```text
include('simpleicons-14/D/Digitalocean')
```



| Illustration | Digitalocean |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Digitalocean.png) | ![illustration for Digitalocean](../../simpleicons-14/D/Digitalocean.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DigitaloceanXs>`
- `<$DigitaloceanSm>`
- `<$DigitaloceanMd>`
- `<$DigitaloceanLg>`





## Digitalocean

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Digitalocean
include('simpleicons-14/D/Digitalocean')

' renders the element
Digitalocean('Digitalocean', 'Digitalocean', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Digitalocean
include('simpleicons-14/D/Digitalocean')

' renders the element
Digitalocean('Digitalocean', 'Digitalocean', 'an optional tech label', 'an optional description')
@enduml
```

