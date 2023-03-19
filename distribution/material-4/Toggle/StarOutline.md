# StarOutline


```text
material-4/Toggle/StarOutline
```

```text
include('material-4/Toggle/StarOutline')
```



| Illustration | StarOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Toggle/StarOutline.png) | ![illustration for StarOutline](../../material-4/Toggle/StarOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarOutlineXs>`
- `<$StarOutlineSm>`
- `<$StarOutlineMd>`
- `<$StarOutlineLg>`





## StarOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StarOutline
include('material-4/Toggle/StarOutline')

' renders the element
StarOutline('StarOutline', 'Star Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StarOutline
include('material-4/Toggle/StarOutline')

' renders the element
StarOutline('StarOutline', 'Star Outline', 'an optional tech label', 'an optional description')
@enduml
```

