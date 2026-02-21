# Openrouter


```text
simpleicons-14/O/Openrouter
```

```text
include('simpleicons-14/O/Openrouter')
```



| Illustration | Openrouter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Openrouter.png) | ![illustration for Openrouter](../../simpleicons-14/O/Openrouter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenrouterXs>`
- `<$OpenrouterSm>`
- `<$OpenrouterMd>`
- `<$OpenrouterLg>`





## Openrouter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Openrouter
include('simpleicons-14/O/Openrouter')

' renders the element
Openrouter('Openrouter', 'Openrouter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openrouter
include('simpleicons-14/O/Openrouter')

' renders the element
Openrouter('Openrouter', 'Openrouter', 'an optional tech label', 'an optional description')
@enduml
```

