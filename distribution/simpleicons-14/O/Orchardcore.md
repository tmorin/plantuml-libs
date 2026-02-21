# Orchardcore


```text
simpleicons-14/O/Orchardcore
```

```text
include('simpleicons-14/O/Orchardcore')
```



| Illustration | Orchardcore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Orchardcore.png) | ![illustration for Orchardcore](../../simpleicons-14/O/Orchardcore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OrchardcoreXs>`
- `<$OrchardcoreSm>`
- `<$OrchardcoreMd>`
- `<$OrchardcoreLg>`





## Orchardcore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Orchardcore
include('simpleicons-14/O/Orchardcore')

' renders the element
Orchardcore('Orchardcore', 'Orchardcore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Orchardcore
include('simpleicons-14/O/Orchardcore')

' renders the element
Orchardcore('Orchardcore', 'Orchardcore', 'an optional tech label', 'an optional description')
@enduml
```

