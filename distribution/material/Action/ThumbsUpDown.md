# ThumbsUpDown


```text
material/Action/ThumbsUpDown
```

```text
include('material/Action/ThumbsUpDown')
```



| Illustration | ThumbsUpDown |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ThumbsUpDown.png) | ![illustration for ThumbsUpDown](../../material/Action/ThumbsUpDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbsUpDownXs>`
- `<$ThumbsUpDownSm>`
- `<$ThumbsUpDownMd>`
- `<$ThumbsUpDownLg>`





## ThumbsUpDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ThumbsUpDown
include('material/Action/ThumbsUpDown')

' renders the element
ThumbsUpDown('ThumbsUpDown', 'Thumbs Up Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThumbsUpDown
include('material/Action/ThumbsUpDown')

' renders the element
ThumbsUpDown('ThumbsUpDown', 'Thumbs Up Down', 'an optional tech label', 'an optional description')
@enduml
```

