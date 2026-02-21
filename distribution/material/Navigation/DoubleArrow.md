# DoubleArrow


```text
material/Navigation/DoubleArrow
```

```text
include('material/Navigation/DoubleArrow')
```



| Illustration | DoubleArrow |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/DoubleArrow.png) | ![illustration for DoubleArrow](../../material/Navigation/DoubleArrow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoubleArrowXs>`
- `<$DoubleArrowSm>`
- `<$DoubleArrowMd>`
- `<$DoubleArrowLg>`





## DoubleArrow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DoubleArrow
include('material/Navigation/DoubleArrow')

' renders the element
DoubleArrow('DoubleArrow', 'Double Arrow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DoubleArrow
include('material/Navigation/DoubleArrow')

' renders the element
DoubleArrow('DoubleArrow', 'Double Arrow', 'an optional tech label', 'an optional description')
@enduml
```

