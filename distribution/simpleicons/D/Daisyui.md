# Daisyui


```text
simpleicons/D/Daisyui
```

```text
include('simpleicons/D/Daisyui')
```



| Illustration | Daisyui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Daisyui.png) | ![illustration for Daisyui](../../simpleicons/D/Daisyui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DaisyuiXs>`
- `<$DaisyuiSm>`
- `<$DaisyuiMd>`
- `<$DaisyuiLg>`





## Daisyui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Daisyui
include('simpleicons/D/Daisyui')

' renders the element
Daisyui('Daisyui', 'Daisyui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Daisyui
include('simpleicons/D/Daisyui')

' renders the element
Daisyui('Daisyui', 'Daisyui', 'an optional tech label', 'an optional description')
@enduml
```

