# FlashOn


```text
material/Image/FlashOn
```

```text
include('material/Image/FlashOn')
```



| Illustration | FlashOn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FlashOn.png) | ![illustration for FlashOn](../../material/Image/FlashOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlashOnXs>`
- `<$FlashOnSm>`
- `<$FlashOnMd>`
- `<$FlashOnLg>`





## FlashOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FlashOn
include('material/Image/FlashOn')

' renders the element
FlashOn('FlashOn', 'Flash On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlashOn
include('material/Image/FlashOn')

' renders the element
FlashOn('FlashOn', 'Flash On', 'an optional tech label', 'an optional description')
@enduml
```

