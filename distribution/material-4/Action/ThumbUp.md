# ThumbUp


```text
material-4/Action/ThumbUp
```

```text
include('material-4/Action/ThumbUp')
```



| Illustration | ThumbUp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ThumbUp.png) | ![illustration for ThumbUp](../../material-4/Action/ThumbUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbUpXs>`
- `<$ThumbUpSm>`
- `<$ThumbUpMd>`
- `<$ThumbUpLg>`





## ThumbUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ThumbUp
include('material-4/Action/ThumbUp')

' renders the element
ThumbUp('ThumbUp', 'Thumb Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThumbUp
include('material-4/Action/ThumbUp')

' renders the element
ThumbUp('ThumbUp', 'Thumb Up', 'an optional tech label', 'an optional description')
@enduml
```

