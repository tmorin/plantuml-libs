# Feedback


```text
material/Action/Feedback
```

```text
include('material/Action/Feedback')
```



| Illustration | Feedback |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Feedback.png) | ![illustration for Feedback](../../material/Action/Feedback.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FeedbackXs>`
- `<$FeedbackSm>`
- `<$FeedbackMd>`
- `<$FeedbackLg>`





## Feedback

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Feedback
include('material/Action/Feedback')

' renders the element
Feedback('Feedback', 'Feedback', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Feedback
include('material/Action/Feedback')

' renders the element
Feedback('Feedback', 'Feedback', 'an optional tech label', 'an optional description')
@enduml
```

