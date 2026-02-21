# Tag


```text
fontawesome/Solid/Tag
```

```text
include('fontawesome/Solid/Tag')
```



| Illustration | Tag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tag.png) | ![illustration for Tag](../../fontawesome/Solid/Tag.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tag
include('fontawesome/Solid/Tag')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tag
include('fontawesome/Solid/Tag')

' renders the element
Tag('Tag', 'Tag', 'an optional tech label', 'an optional description')
@enduml
```

