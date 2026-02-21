# ExpandLess


```text
material/Navigation/ExpandLess
```

```text
include('material/Navigation/ExpandLess')
```



| Illustration | ExpandLess |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/ExpandLess.png) | ![illustration for ExpandLess](../../material/Navigation/ExpandLess.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExpandLessXs>`
- `<$ExpandLessSm>`
- `<$ExpandLessMd>`
- `<$ExpandLessLg>`





## ExpandLess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ExpandLess
include('material/Navigation/ExpandLess')

' renders the element
ExpandLess('ExpandLess', 'Expand Less', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element ExpandLess
include('material/Navigation/ExpandLess')

' renders the element
ExpandLess('ExpandLess', 'Expand Less', 'an optional tech label', 'an optional description')
@enduml
```

