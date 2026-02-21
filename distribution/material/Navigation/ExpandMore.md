# ExpandMore


```text
material/Navigation/ExpandMore
```

```text
include('material/Navigation/ExpandMore')
```



| Illustration | ExpandMore |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/ExpandMore.png) | ![illustration for ExpandMore](../../material/Navigation/ExpandMore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExpandMoreXs>`
- `<$ExpandMoreSm>`
- `<$ExpandMoreMd>`
- `<$ExpandMoreLg>`





## ExpandMore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ExpandMore
include('material/Navigation/ExpandMore')

' renders the element
ExpandMore('ExpandMore', 'Expand More', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExpandMore
include('material/Navigation/ExpandMore')

' renders the element
ExpandMore('ExpandMore', 'Expand More', 'an optional tech label', 'an optional description')
@enduml
```

