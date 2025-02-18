# Answer


```text
simpleicons-14/A/Answer
```

```text
include('simpleicons-14/A/Answer')
```



| Illustration | Answer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Answer.png) | ![illustration for Answer](../../simpleicons-14/A/Answer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnswerXs>`
- `<$AnswerSm>`
- `<$AnswerMd>`
- `<$AnswerLg>`





## Answer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Answer
include('simpleicons-14/A/Answer')

' renders the element
Answer('Answer', 'Answer', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Answer
include('simpleicons-14/A/Answer')

' renders the element
Answer('Answer', 'Answer', 'an optional tech label', 'an optional description')
@enduml
```

