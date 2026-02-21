# StarOutline


```text
material/Toggle/StarOutline
```

```text
include('material/Toggle/StarOutline')
```



| Illustration | StarOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Toggle/StarOutline.png) | ![illustration for StarOutline](../../material/Toggle/StarOutline.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element StarOutline
include('material/Toggle/StarOutline')

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
include('material/bootstrap')

' loads the Item which embeds the element StarOutline
include('material/Toggle/StarOutline')

' renders the element
StarOutline('StarOutline', 'Star Outline', 'an optional tech label', 'an optional description')
@enduml
```

