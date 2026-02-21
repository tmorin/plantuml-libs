# RemoveCircleOutline


```text
material/Content/RemoveCircleOutline
```

```text
include('material/Content/RemoveCircleOutline')
```



| Illustration | RemoveCircleOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/RemoveCircleOutline.png) | ![illustration for RemoveCircleOutline](../../material/Content/RemoveCircleOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemoveCircleOutlineXs>`
- `<$RemoveCircleOutlineSm>`
- `<$RemoveCircleOutlineMd>`
- `<$RemoveCircleOutlineLg>`





## RemoveCircleOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RemoveCircleOutline
include('material/Content/RemoveCircleOutline')

' renders the element
RemoveCircleOutline('RemoveCircleOutline', 'Remove Circle Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RemoveCircleOutline
include('material/Content/RemoveCircleOutline')

' renders the element
RemoveCircleOutline('RemoveCircleOutline', 'Remove Circle Outline', 'an optional tech label', 'an optional description')
@enduml
```

