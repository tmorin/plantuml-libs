# Tag


```text
material/Content/Tag
```

```text
include('material/Content/Tag')
```



| Illustration | Tag |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Tag.png) | ![illustration for Tag](../../material/Content/Tag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TagXs>`
- `<$TagSm>`
- `<$TagMd>`
- `<$TagLg>`





## Tag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Tag
include('material/Content/Tag')

' renders the element
Tag('Tag', 'Tag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tag
include('material/Content/Tag')

' renders the element
Tag('Tag', 'Tag', 'an optional tech label', 'an optional description')
@enduml
```

