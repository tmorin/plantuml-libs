# Elm


```text
simpleicons-14/E/Elm
```

```text
include('simpleicons-14/E/Elm')
```



| Illustration | Elm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Elm.png) | ![illustration for Elm](../../simpleicons-14/E/Elm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElmXs>`
- `<$ElmSm>`
- `<$ElmMd>`
- `<$ElmLg>`





## Elm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Elm
include('simpleicons-14/E/Elm')

' renders the element
Elm('Elm', 'Elm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Elm
include('simpleicons-14/E/Elm')

' renders the element
Elm('Elm', 'Elm', 'an optional tech label', 'an optional description')
@enduml
```

