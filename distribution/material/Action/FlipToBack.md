# FlipToBack


```text
material/Action/FlipToBack
```

```text
include('material/Action/FlipToBack')
```



| Illustration | FlipToBack |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/FlipToBack.png) | ![illustration for FlipToBack](../../material/Action/FlipToBack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlipToBackXs>`
- `<$FlipToBackSm>`
- `<$FlipToBackMd>`
- `<$FlipToBackLg>`





## FlipToBack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FlipToBack
include('material/Action/FlipToBack')

' renders the element
FlipToBack('FlipToBack', 'Flip To Back', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlipToBack
include('material/Action/FlipToBack')

' renders the element
FlipToBack('FlipToBack', 'Flip To Back', 'an optional tech label', 'an optional description')
@enduml
```

