# Yabai


```text
simpleicons/Y/Yabai
```

```text
include('simpleicons/Y/Yabai')
```



| Illustration | Yabai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Y/Yabai.png) | ![illustration for Yabai](../../simpleicons/Y/Yabai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YabaiXs>`
- `<$YabaiSm>`
- `<$YabaiMd>`
- `<$YabaiLg>`





## Yabai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Yabai
include('simpleicons/Y/Yabai')

' renders the element
Yabai('Yabai', 'Yabai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yabai
include('simpleicons/Y/Yabai')

' renders the element
Yabai('Yabai', 'Yabai', 'an optional tech label', 'an optional description')
@enduml
```

