# Radixui


```text
simpleicons/R/Radixui
```

```text
include('simpleicons/R/Radixui')
```



| Illustration | Radixui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Radixui.png) | ![illustration for Radixui](../../simpleicons/R/Radixui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RadixuiXs>`
- `<$RadixuiSm>`
- `<$RadixuiMd>`
- `<$RadixuiLg>`





## Radixui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Radixui
include('simpleicons/R/Radixui')

' renders the element
Radixui('Radixui', 'Radixui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Radixui
include('simpleicons/R/Radixui')

' renders the element
Radixui('Radixui', 'Radixui', 'an optional tech label', 'an optional description')
@enduml
```

