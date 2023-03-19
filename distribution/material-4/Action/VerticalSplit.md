# VerticalSplit


```text
material-4/Action/VerticalSplit
```

```text
include('material-4/Action/VerticalSplit')
```



| Illustration | VerticalSplit |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/VerticalSplit.png) | ![illustration for VerticalSplit](../../material-4/Action/VerticalSplit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VerticalSplitXs>`
- `<$VerticalSplitSm>`
- `<$VerticalSplitMd>`
- `<$VerticalSplitLg>`





## VerticalSplit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VerticalSplit
include('material-4/Action/VerticalSplit')

' renders the element
VerticalSplit('VerticalSplit', 'Vertical Split', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element VerticalSplit
include('material-4/Action/VerticalSplit')

' renders the element
VerticalSplit('VerticalSplit', 'Vertical Split', 'an optional tech label', 'an optional description')
@enduml
```

