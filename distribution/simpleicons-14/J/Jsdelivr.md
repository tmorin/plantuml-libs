# Jsdelivr


```text
simpleicons-14/J/Jsdelivr
```

```text
include('simpleicons-14/J/Jsdelivr')
```



| Illustration | Jsdelivr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jsdelivr.png) | ![illustration for Jsdelivr](../../simpleicons-14/J/Jsdelivr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JsdelivrXs>`
- `<$JsdelivrSm>`
- `<$JsdelivrMd>`
- `<$JsdelivrLg>`





## Jsdelivr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jsdelivr
include('simpleicons-14/J/Jsdelivr')

' renders the element
Jsdelivr('Jsdelivr', 'Jsdelivr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jsdelivr
include('simpleicons-14/J/Jsdelivr')

' renders the element
Jsdelivr('Jsdelivr', 'Jsdelivr', 'an optional tech label', 'an optional description')
@enduml
```

