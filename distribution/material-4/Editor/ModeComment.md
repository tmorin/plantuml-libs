# ModeComment


```text
material-4/Editor/ModeComment
```

```text
include('material-4/Editor/ModeComment')
```



| Illustration | ModeComment |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/ModeComment.png) | ![illustration for ModeComment](../../material-4/Editor/ModeComment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModeCommentXs>`
- `<$ModeCommentSm>`
- `<$ModeCommentMd>`
- `<$ModeCommentLg>`





## ModeComment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ModeComment
include('material-4/Editor/ModeComment')

' renders the element
ModeComment('ModeComment', 'Mode Comment', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ModeComment
include('material-4/Editor/ModeComment')

' renders the element
ModeComment('ModeComment', 'Mode Comment', 'an optional tech label', 'an optional description')
@enduml
```

