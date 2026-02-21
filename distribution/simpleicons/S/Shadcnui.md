# Shadcnui


```text
simpleicons/S/Shadcnui
```

```text
include('simpleicons/S/Shadcnui')
```



| Illustration | Shadcnui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Shadcnui.png) | ![illustration for Shadcnui](../../simpleicons/S/Shadcnui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShadcnuiXs>`
- `<$ShadcnuiSm>`
- `<$ShadcnuiMd>`
- `<$ShadcnuiLg>`





## Shadcnui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Shadcnui
include('simpleicons/S/Shadcnui')

' renders the element
Shadcnui('Shadcnui', 'Shadcnui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shadcnui
include('simpleicons/S/Shadcnui')

' renders the element
Shadcnui('Shadcnui', 'Shadcnui', 'an optional tech label', 'an optional description')
@enduml
```

