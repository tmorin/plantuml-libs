# CommentsDollar


```text
fontawesome/Solid/CommentsDollar
```

```text
include('fontawesome/Solid/CommentsDollar')
```



| Illustration | CommentsDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CommentsDollar.png) | ![illustration for CommentsDollar](../../fontawesome/Solid/CommentsDollar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentsDollarXs>`
- `<$CommentsDollarSm>`
- `<$CommentsDollarMd>`
- `<$CommentsDollarLg>`





## CommentsDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CommentsDollar
include('fontawesome/Solid/CommentsDollar')

' renders the element
CommentsDollar('CommentsDollar', 'Comments Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CommentsDollar
include('fontawesome/Solid/CommentsDollar')

' renders the element
CommentsDollar('CommentsDollar', 'Comments Dollar', 'an optional tech label', 'an optional description')
@enduml
```

