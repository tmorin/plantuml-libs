# CommentsDollar


```text
fontawesome-6/Solid/CommentsDollar
```

```text
include('fontawesome-6/Solid/CommentsDollar')
```



| Illustration | CommentsDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CommentsDollar.png) | ![illustration for CommentsDollar](../../fontawesome-6/Solid/CommentsDollar.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CommentsDollar
include('fontawesome-6/Solid/CommentsDollar')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CommentsDollar
include('fontawesome-6/Solid/CommentsDollar')

' renders the element
CommentsDollar('CommentsDollar', 'Comments Dollar', 'an optional tech label', 'an optional description')
@enduml
```

