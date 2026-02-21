# Pixlr


```text
simpleicons/P/Pixlr
```

```text
include('simpleicons/P/Pixlr')
```



| Illustration | Pixlr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pixlr.png) | ![illustration for Pixlr](../../simpleicons/P/Pixlr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PixlrXs>`
- `<$PixlrSm>`
- `<$PixlrMd>`
- `<$PixlrLg>`





## Pixlr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pixlr
include('simpleicons/P/Pixlr')

' renders the element
Pixlr('Pixlr', 'Pixlr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pixlr
include('simpleicons/P/Pixlr')

' renders the element
Pixlr('Pixlr', 'Pixlr', 'an optional tech label', 'an optional description')
@enduml
```

