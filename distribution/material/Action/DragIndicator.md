# DragIndicator


```text
material/Action/DragIndicator
```

```text
include('material/Action/DragIndicator')
```



| Illustration | DragIndicator |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/DragIndicator.png) | ![illustration for DragIndicator](../../material/Action/DragIndicator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DragIndicatorXs>`
- `<$DragIndicatorSm>`
- `<$DragIndicatorMd>`
- `<$DragIndicatorLg>`





## DragIndicator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DragIndicator
include('material/Action/DragIndicator')

' renders the element
DragIndicator('DragIndicator', 'Drag Indicator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DragIndicator
include('material/Action/DragIndicator')

' renders the element
DragIndicator('DragIndicator', 'Drag Indicator', 'an optional tech label', 'an optional description')
@enduml
```

