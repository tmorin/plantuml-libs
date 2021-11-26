# FlashAuto


```text
material-4/Image/FlashAuto
```

```text
include('material-4/Image/FlashAuto')
```



| Illustration | FlashAuto |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FlashAuto.png) | ![illustration for FlashAuto](../../material-4/Image/FlashAuto.Local.png) |




## FlashAuto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FlashAuto
include('material-4/Image/FlashAuto')

' renders the element
FlashAuto('FlashAuto', 'Flash Auto', 'an optional tech label')
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

' loads the Item which embeds the element FlashAuto
include('material-4/Image/FlashAuto')

' renders the element
FlashAuto('FlashAuto', 'Flash Auto', 'an optional tech label')
@enduml
```

