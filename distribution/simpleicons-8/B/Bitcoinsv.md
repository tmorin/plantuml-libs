# Bitcoinsv


```text
simpleicons-8/B/Bitcoinsv
```

```text
include('simpleicons-8/B/Bitcoinsv')
```



| Illustration | Bitcoinsv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bitcoinsv.png) | ![illustration for Bitcoinsv](../../simpleicons-8/B/Bitcoinsv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitcoinsvXs>`
- `<$BitcoinsvSm>`
- `<$BitcoinsvMd>`
- `<$BitcoinsvLg>`





## Bitcoinsv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bitcoinsv
include('simpleicons-8/B/Bitcoinsv')

' renders the element
Bitcoinsv('Bitcoinsv', 'Bitcoinsv', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bitcoinsv
include('simpleicons-8/B/Bitcoinsv')

' renders the element
Bitcoinsv('Bitcoinsv', 'Bitcoinsv', 'an optional tech label', 'an optional description')
@enduml
```

