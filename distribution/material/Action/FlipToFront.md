# FlipToFront


```text
material/Action/FlipToFront
```

```text
include('material/Action/FlipToFront')
```



| Illustration | FlipToFront |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/FlipToFront.png) | ![illustration for FlipToFront](../../material/Action/FlipToFront.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlipToFrontXs>`
- `<$FlipToFrontSm>`
- `<$FlipToFrontMd>`
- `<$FlipToFrontLg>`





## FlipToFront

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FlipToFront
include('material/Action/FlipToFront')

' renders the element
FlipToFront('FlipToFront', 'Flip To Front', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlipToFront
include('material/Action/FlipToFront')

' renders the element
FlipToFront('FlipToFront', 'Flip To Front', 'an optional tech label', 'an optional description')
@enduml
```

