# Baseui


```text
simpleicons/B/Baseui
```

```text
include('simpleicons/B/Baseui')
```



| Illustration | Baseui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Baseui.png) | ![illustration for Baseui](../../simpleicons/B/Baseui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BaseuiXs>`
- `<$BaseuiSm>`
- `<$BaseuiMd>`
- `<$BaseuiLg>`





## Baseui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Baseui
include('simpleicons/B/Baseui')

' renders the element
Baseui('Baseui', 'Baseui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Baseui
include('simpleicons/B/Baseui')

' renders the element
Baseui('Baseui', 'Baseui', 'an optional tech label', 'an optional description')
@enduml
```

