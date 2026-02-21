# Semanticui


```text
simpleicons/S/Semanticui
```

```text
include('simpleicons/S/Semanticui')
```



| Illustration | Semanticui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Semanticui.png) | ![illustration for Semanticui](../../simpleicons/S/Semanticui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SemanticuiXs>`
- `<$SemanticuiSm>`
- `<$SemanticuiMd>`
- `<$SemanticuiLg>`





## Semanticui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Semanticui
include('simpleicons/S/Semanticui')

' renders the element
Semanticui('Semanticui', 'Semanticui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Semanticui
include('simpleicons/S/Semanticui')

' renders the element
Semanticui('Semanticui', 'Semanticui', 'an optional tech label', 'an optional description')
@enduml
```

