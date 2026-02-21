# FileCircleQuestion


```text
fontawesome/Solid/FileCircleQuestion
```

```text
include('fontawesome/Solid/FileCircleQuestion')
```



| Illustration | FileCircleQuestion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileCircleQuestion.png) | ![illustration for FileCircleQuestion](../../fontawesome/Solid/FileCircleQuestion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileCircleQuestionXs>`
- `<$FileCircleQuestionSm>`
- `<$FileCircleQuestionMd>`
- `<$FileCircleQuestionLg>`





## FileCircleQuestion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileCircleQuestion
include('fontawesome/Solid/FileCircleQuestion')

' renders the element
FileCircleQuestion('FileCircleQuestion', 'File Circle Question', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCircleQuestion
include('fontawesome/Solid/FileCircleQuestion')

' renders the element
FileCircleQuestion('FileCircleQuestion', 'File Circle Question', 'an optional tech label', 'an optional description')
@enduml
```

