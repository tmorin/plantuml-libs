# Chedraui


```text
simpleicons/C/Chedraui
```

```text
include('simpleicons/C/Chedraui')
```



| Illustration | Chedraui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chedraui.png) | ![illustration for Chedraui](../../simpleicons/C/Chedraui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChedrauiXs>`
- `<$ChedrauiSm>`
- `<$ChedrauiMd>`
- `<$ChedrauiLg>`





## Chedraui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chedraui
include('simpleicons/C/Chedraui')

' renders the element
Chedraui('Chedraui', 'Chedraui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chedraui
include('simpleicons/C/Chedraui')

' renders the element
Chedraui('Chedraui', 'Chedraui', 'an optional tech label', 'an optional description')
@enduml
```

