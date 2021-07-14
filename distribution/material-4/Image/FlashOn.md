# FlashOn


```text
material-4/Image/FlashOn
```

```text
include('material-4/Image/FlashOn')
```



| Illustration | FlashOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FlashOn.png) | ![illustration for FlashOn](../../material-4/Image/FlashOn.Local.png) |




## FlashOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FlashOn
include('material-4/Image/FlashOn')

' renders the element
FlashOn('FlashOn', 'Flash On', 'an optional tech label')
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

' loads the Item which embeds the element FlashOn
include('material-4/Image/FlashOn')

' renders the element
FlashOn('FlashOn', 'Flash On', 'an optional tech label')
@enduml
```

