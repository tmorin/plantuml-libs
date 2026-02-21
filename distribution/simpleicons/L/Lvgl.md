# Lvgl


```text
simpleicons/L/Lvgl
```

```text
include('simpleicons/L/Lvgl')
```



| Illustration | Lvgl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lvgl.png) | ![illustration for Lvgl](../../simpleicons/L/Lvgl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LvglXs>`
- `<$LvglSm>`
- `<$LvglMd>`
- `<$LvglLg>`





## Lvgl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lvgl
include('simpleicons/L/Lvgl')

' renders the element
Lvgl('Lvgl', 'Lvgl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lvgl
include('simpleicons/L/Lvgl')

' renders the element
Lvgl('Lvgl', 'Lvgl', 'an optional tech label', 'an optional description')
@enduml
```

