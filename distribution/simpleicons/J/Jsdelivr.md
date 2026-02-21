# Jsdelivr


```text
simpleicons/J/Jsdelivr
```

```text
include('simpleicons/J/Jsdelivr')
```



| Illustration | Jsdelivr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jsdelivr.png) | ![illustration for Jsdelivr](../../simpleicons/J/Jsdelivr.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jsdelivr
include('simpleicons/J/Jsdelivr')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jsdelivr
include('simpleicons/J/Jsdelivr')

' renders the element
Jsdelivr('Jsdelivr', 'Jsdelivr', 'an optional tech label', 'an optional description')
@enduml
```

