# Panasonic


```text
simpleicons-14/P/Panasonic
```

```text
include('simpleicons-14/P/Panasonic')
```



| Illustration | Panasonic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Panasonic.png) | ![illustration for Panasonic](../../simpleicons-14/P/Panasonic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PanasonicXs>`
- `<$PanasonicSm>`
- `<$PanasonicMd>`
- `<$PanasonicLg>`





## Panasonic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Panasonic
include('simpleicons-14/P/Panasonic')

' renders the element
Panasonic('Panasonic', 'Panasonic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Panasonic
include('simpleicons-14/P/Panasonic')

' renders the element
Panasonic('Panasonic', 'Panasonic', 'an optional tech label', 'an optional description')
@enduml
```

