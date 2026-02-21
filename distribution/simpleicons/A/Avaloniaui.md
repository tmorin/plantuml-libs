# Avaloniaui


```text
simpleicons/A/Avaloniaui
```

```text
include('simpleicons/A/Avaloniaui')
```



| Illustration | Avaloniaui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Avaloniaui.png) | ![illustration for Avaloniaui](../../simpleicons/A/Avaloniaui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AvaloniauiXs>`
- `<$AvaloniauiSm>`
- `<$AvaloniauiMd>`
- `<$AvaloniauiLg>`





## Avaloniaui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Avaloniaui
include('simpleicons/A/Avaloniaui')

' renders the element
Avaloniaui('Avaloniaui', 'Avaloniaui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Avaloniaui
include('simpleicons/A/Avaloniaui')

' renders the element
Avaloniaui('Avaloniaui', 'Avaloniaui', 'an optional tech label', 'an optional description')
@enduml
```

