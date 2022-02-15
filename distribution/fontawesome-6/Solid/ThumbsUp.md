# ThumbsUp


```text
fontawesome-6/Solid/ThumbsUp
```

```text
include('fontawesome-6/Solid/ThumbsUp')
```



| Illustration | ThumbsUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ThumbsUp.png) | ![illustration for ThumbsUp](../../fontawesome-6/Solid/ThumbsUp.Local.png) |




## ThumbsUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ThumbsUp
include('fontawesome-6/Solid/ThumbsUp')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ThumbsUp
include('fontawesome-6/Solid/ThumbsUp')

' renders the element
ThumbsUp('ThumbsUp', 'Thumbs Up', 'an optional tech label')
@enduml
```

