# Verdaccio


```text
simpleicons-14/V/Verdaccio
```

```text
include('simpleicons-14/V/Verdaccio')
```



| Illustration | Verdaccio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Verdaccio.png) | ![illustration for Verdaccio](../../simpleicons-14/V/Verdaccio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VerdaccioXs>`
- `<$VerdaccioSm>`
- `<$VerdaccioMd>`
- `<$VerdaccioLg>`





## Verdaccio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Verdaccio
include('simpleicons-14/V/Verdaccio')

' renders the element
Verdaccio('Verdaccio', 'Verdaccio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Verdaccio
include('simpleicons-14/V/Verdaccio')

' renders the element
Verdaccio('Verdaccio', 'Verdaccio', 'an optional tech label', 'an optional description')
@enduml
```

