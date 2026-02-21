# CircleQuestion


```text
fontawesome/Regular/CircleQuestion
```

```text
include('fontawesome/Regular/CircleQuestion')
```



| Illustration | CircleQuestion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CircleQuestion.png) | ![illustration for CircleQuestion](../../fontawesome/Regular/CircleQuestion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleQuestionXs>`
- `<$CircleQuestionSm>`
- `<$CircleQuestionMd>`
- `<$CircleQuestionLg>`





## CircleQuestion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleQuestion
include('fontawesome/Regular/CircleQuestion')

' renders the element
CircleQuestion('CircleQuestion', 'Circle Question', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleQuestion
include('fontawesome/Regular/CircleQuestion')

' renders the element
CircleQuestion('CircleQuestion', 'Circle Question', 'an optional tech label', 'an optional description')
@enduml
```

