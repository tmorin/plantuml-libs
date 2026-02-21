# Babelio


```text
simpleicons-14/B/Babelio
```

```text
include('simpleicons-14/B/Babelio')
```



| Illustration | Babelio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Babelio.png) | ![illustration for Babelio](../../simpleicons-14/B/Babelio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BabelioXs>`
- `<$BabelioSm>`
- `<$BabelioMd>`
- `<$BabelioLg>`





## Babelio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Babelio
include('simpleicons-14/B/Babelio')

' renders the element
Babelio('Babelio', 'Babelio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Babelio
include('simpleicons-14/B/Babelio')

' renders the element
Babelio('Babelio', 'Babelio', 'an optional tech label', 'an optional description')
@enduml
```

