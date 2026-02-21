# Pinescript


```text
simpleicons/P/Pinescript
```

```text
include('simpleicons/P/Pinescript')
```



| Illustration | Pinescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pinescript.png) | ![illustration for Pinescript](../../simpleicons/P/Pinescript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PinescriptXs>`
- `<$PinescriptSm>`
- `<$PinescriptMd>`
- `<$PinescriptLg>`





## Pinescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pinescript
include('simpleicons/P/Pinescript')

' renders the element
Pinescript('Pinescript', 'Pinescript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pinescript
include('simpleicons/P/Pinescript')

' renders the element
Pinescript('Pinescript', 'Pinescript', 'an optional tech label', 'an optional description')
@enduml
```

