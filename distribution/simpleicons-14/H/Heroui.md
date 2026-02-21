# Heroui


```text
simpleicons-14/H/Heroui
```

```text
include('simpleicons-14/H/Heroui')
```



| Illustration | Heroui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Heroui.png) | ![illustration for Heroui](../../simpleicons-14/H/Heroui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HerouiXs>`
- `<$HerouiSm>`
- `<$HerouiMd>`
- `<$HerouiLg>`





## Heroui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Heroui
include('simpleicons-14/H/Heroui')

' renders the element
Heroui('Heroui', 'Heroui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Heroui
include('simpleicons-14/H/Heroui')

' renders the element
Heroui('Heroui', 'Heroui', 'an optional tech label', 'an optional description')
@enduml
```

