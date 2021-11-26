# Tag


```text
material-4/Content/Tag
```

```text
include('material-4/Content/Tag')
```



| Illustration | Tag |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Tag.png) | ![illustration for Tag](../../material-4/Content/Tag.Local.png) |




## Tag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Tag
include('material-4/Content/Tag')

' renders the element
Tag('Tag', 'Tag', 'an optional tech label')
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

' loads the Item which embeds the element Tag
include('material-4/Content/Tag')

' renders the element
Tag('Tag', 'Tag', 'an optional tech label')
@enduml
```

