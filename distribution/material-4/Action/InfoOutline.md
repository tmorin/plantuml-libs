# InfoOutline


```text
material-4/Action/InfoOutline
```

```text
include('material-4/Action/InfoOutline')
```



| Illustration | InfoOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/InfoOutline.png) | ![illustration for InfoOutline](../../material-4/Action/InfoOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InfoOutlineXs>`
- `<$InfoOutlineSm>`
- `<$InfoOutlineMd>`
- `<$InfoOutlineLg>`





## InfoOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element InfoOutline
include('material-4/Action/InfoOutline')

' renders the element
InfoOutline('InfoOutline', 'Info Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InfoOutline
include('material-4/Action/InfoOutline')

' renders the element
InfoOutline('InfoOutline', 'Info Outline', 'an optional tech label', 'an optional description')
@enduml
```

