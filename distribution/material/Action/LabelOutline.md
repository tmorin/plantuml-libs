# LabelOutline


```text
material/Action/LabelOutline
```

```text
include('material/Action/LabelOutline')
```



| Illustration | LabelOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/LabelOutline.png) | ![illustration for LabelOutline](../../material/Action/LabelOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LabelOutlineXs>`
- `<$LabelOutlineSm>`
- `<$LabelOutlineMd>`
- `<$LabelOutlineLg>`





## LabelOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LabelOutline
include('material/Action/LabelOutline')

' renders the element
LabelOutline('LabelOutline', 'Label Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LabelOutline
include('material/Action/LabelOutline')

' renders the element
LabelOutline('LabelOutline', 'Label Outline', 'an optional tech label', 'an optional description')
@enduml
```

