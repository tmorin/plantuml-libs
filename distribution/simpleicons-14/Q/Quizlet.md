# Quizlet


```text
simpleicons-14/Q/Quizlet
```

```text
include('simpleicons-14/Q/Quizlet')
```



| Illustration | Quizlet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Quizlet.png) | ![illustration for Quizlet](../../simpleicons-14/Q/Quizlet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuizletXs>`
- `<$QuizletSm>`
- `<$QuizletMd>`
- `<$QuizletLg>`





## Quizlet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quizlet
include('simpleicons-14/Q/Quizlet')

' renders the element
Quizlet('Quizlet', 'Quizlet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quizlet
include('simpleicons-14/Q/Quizlet')

' renders the element
Quizlet('Quizlet', 'Quizlet', 'an optional tech label', 'an optional description')
@enduml
```

