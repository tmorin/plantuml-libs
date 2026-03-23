# CommentAlt


```text
fontawesome/Regular/CommentAlt
```

```text
include('fontawesome/Regular/CommentAlt')
```



| Illustration | CommentAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CommentAlt.png) | ![illustration for CommentAlt](../../fontawesome/Regular/CommentAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentAltXs>`
- `<$CommentAltSm>`
- `<$CommentAltMd>`
- `<$CommentAltLg>`





## CommentAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CommentAlt
include('fontawesome/Regular/CommentAlt')

' renders the element
CommentAlt('CommentAlt', 'Comment Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CommentAlt
include('fontawesome/Regular/CommentAlt')

' renders the element
CommentAlt('CommentAlt', 'Comment Alt', 'an optional tech label', 'an optional description')
@enduml
```

