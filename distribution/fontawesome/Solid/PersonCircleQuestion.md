# PersonCircleQuestion


```text
fontawesome/Solid/PersonCircleQuestion
```

```text
include('fontawesome/Solid/PersonCircleQuestion')
```



| Illustration | PersonCircleQuestion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonCircleQuestion.png) | ![illustration for PersonCircleQuestion](../../fontawesome/Solid/PersonCircleQuestion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonCircleQuestionXs>`
- `<$PersonCircleQuestionSm>`
- `<$PersonCircleQuestionMd>`
- `<$PersonCircleQuestionLg>`





## PersonCircleQuestion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonCircleQuestion
include('fontawesome/Solid/PersonCircleQuestion')

' renders the element
PersonCircleQuestion('PersonCircleQuestion', 'Person Circle Question', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonCircleQuestion
include('fontawesome/Solid/PersonCircleQuestion')

' renders the element
PersonCircleQuestion('PersonCircleQuestion', 'Person Circle Question', 'an optional tech label', 'an optional description')
@enduml
```

