# Nodegui


```text
simpleicons-14/N/Nodegui
```

```text
include('simpleicons-14/N/Nodegui')
```



| Illustration | Nodegui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nodegui.png) | ![illustration for Nodegui](../../simpleicons-14/N/Nodegui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NodeguiXs>`
- `<$NodeguiSm>`
- `<$NodeguiMd>`
- `<$NodeguiLg>`





## Nodegui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nodegui
include('simpleicons-14/N/Nodegui')

' renders the element
Nodegui('Nodegui', 'Nodegui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nodegui
include('simpleicons-14/N/Nodegui')

' renders the element
Nodegui('Nodegui', 'Nodegui', 'an optional tech label', 'an optional description')
@enduml
```

