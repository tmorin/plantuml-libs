# ThumbsUp


```text
fontawesome-5/Regular/ThumbsUp
```

```text
include('fontawesome-5/Regular/ThumbsUp')
```



| Illustration | ThumbsUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/ThumbsUp.png) | ![illustration for ThumbsUp](../../fontawesome-5/Regular/ThumbsUp.Local.png) |




## ThumbsUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThumbsUp
include('fontawesome-5/Regular/ThumbsUp')

' renders the element
ThumbsUp('ThumbsUp', 'Thumbs Up', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThumbsUp
include('fontawesome-5/Regular/ThumbsUp')

' renders the element
ThumbsUp('ThumbsUp', 'Thumbs Up', 'an optional tech label')
@enduml
```

