# Pinboard


```text
simpleicons-8/P/Pinboard
```

```text
include('simpleicons-8/P/Pinboard')
```



| Illustration | Pinboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pinboard.png) | ![illustration for Pinboard](../../simpleicons-8/P/Pinboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PinboardXs>`
- `<$PinboardSm>`
- `<$PinboardMd>`
- `<$PinboardLg>`





## Pinboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pinboard
include('simpleicons-8/P/Pinboard')

' renders the element
Pinboard('Pinboard', 'Pinboard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pinboard
include('simpleicons-8/P/Pinboard')

' renders the element
Pinboard('Pinboard', 'Pinboard', 'an optional tech label', 'an optional description')
@enduml
```

