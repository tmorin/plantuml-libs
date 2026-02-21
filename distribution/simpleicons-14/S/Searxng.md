# Searxng


```text
simpleicons-14/S/Searxng
```

```text
include('simpleicons-14/S/Searxng')
```



| Illustration | Searxng |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Searxng.png) | ![illustration for Searxng](../../simpleicons-14/S/Searxng.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SearxngXs>`
- `<$SearxngSm>`
- `<$SearxngMd>`
- `<$SearxngLg>`





## Searxng

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Searxng
include('simpleicons-14/S/Searxng')

' renders the element
Searxng('Searxng', 'Searxng', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Searxng
include('simpleicons-14/S/Searxng')

' renders the element
Searxng('Searxng', 'Searxng', 'an optional tech label', 'an optional description')
@enduml
```

