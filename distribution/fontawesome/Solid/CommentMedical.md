# CommentMedical


```text
fontawesome/Solid/CommentMedical
```

```text
include('fontawesome/Solid/CommentMedical')
```



| Illustration | CommentMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CommentMedical.png) | ![illustration for CommentMedical](../../fontawesome/Solid/CommentMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentMedicalXs>`
- `<$CommentMedicalSm>`
- `<$CommentMedicalMd>`
- `<$CommentMedicalLg>`





## CommentMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CommentMedical
include('fontawesome/Solid/CommentMedical')

' renders the element
CommentMedical('CommentMedical', 'Comment Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CommentMedical
include('fontawesome/Solid/CommentMedical')

' renders the element
CommentMedical('CommentMedical', 'Comment Medical', 'an optional tech label', 'an optional description')
@enduml
```

