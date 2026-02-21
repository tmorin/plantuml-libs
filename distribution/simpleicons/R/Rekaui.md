# Rekaui


```text
simpleicons/R/Rekaui
```

```text
include('simpleicons/R/Rekaui')
```



| Illustration | Rekaui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rekaui.png) | ![illustration for Rekaui](../../simpleicons/R/Rekaui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RekauiXs>`
- `<$RekauiSm>`
- `<$RekauiMd>`
- `<$RekauiLg>`





## Rekaui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rekaui
include('simpleicons/R/Rekaui')

' renders the element
Rekaui('Rekaui', 'Rekaui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rekaui
include('simpleicons/R/Rekaui')

' renders the element
Rekaui('Rekaui', 'Rekaui', 'an optional tech label', 'an optional description')
@enduml
```

