# Purescript


```text
simpleicons-14/P/Purescript
```

```text
include('simpleicons-14/P/Purescript')
```



| Illustration | Purescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Purescript.png) | ![illustration for Purescript](../../simpleicons-14/P/Purescript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PurescriptXs>`
- `<$PurescriptSm>`
- `<$PurescriptMd>`
- `<$PurescriptLg>`





## Purescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Purescript
include('simpleicons-14/P/Purescript')

' renders the element
Purescript('Purescript', 'Purescript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Purescript
include('simpleicons-14/P/Purescript')

' renders the element
Purescript('Purescript', 'Purescript', 'an optional tech label', 'an optional description')
@enduml
```

