# CommentSlash


```text
fontawesome-6/Solid/CommentSlash
```

```text
include('fontawesome-6/Solid/CommentSlash')
```



| Illustration | CommentSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CommentSlash.png) | ![illustration for CommentSlash](../../fontawesome-6/Solid/CommentSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentSlashXs>`
- `<$CommentSlashSm>`
- `<$CommentSlashMd>`
- `<$CommentSlashLg>`





## CommentSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CommentSlash
include('fontawesome-6/Solid/CommentSlash')

' renders the element
CommentSlash('CommentSlash', 'Comment Slash', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CommentSlash
include('fontawesome-6/Solid/CommentSlash')

' renders the element
CommentSlash('CommentSlash', 'Comment Slash', 'an optional tech label', 'an optional description')
@enduml
```

