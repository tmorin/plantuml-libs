# Tag


```text
fontawesome-5/Solid/Tag
```

```text
include('fontawesome-5/Solid/Tag')
```



| Illustration | Tag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tag.png) | ![illustration for Tag](../../fontawesome-5/Solid/Tag.Local.png) |




## Tag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tag
include('fontawesome-5/Solid/Tag')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tag
include('fontawesome-5/Solid/Tag')

' renders the element
Tag('Tag', 'Tag', 'an optional tech label')
@enduml
```

