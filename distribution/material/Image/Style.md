# Style


```text
material/Image/Style
```

```text
include('material/Image/Style')
```



| Illustration | Style |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Style.png) | ![illustration for Style](../../material/Image/Style.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StyleXs>`
- `<$StyleSm>`
- `<$StyleMd>`
- `<$StyleLg>`





## Style

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Style
include('material/Image/Style')

' renders the element
Style('Style', 'Style', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Style
include('material/Image/Style')

' renders the element
Style('Style', 'Style', 'an optional tech label', 'an optional description')
@enduml
```

