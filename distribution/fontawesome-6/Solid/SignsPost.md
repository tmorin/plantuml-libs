# SignsPost


```text
fontawesome-6/Solid/SignsPost
```

```text
include('fontawesome-6/Solid/SignsPost')
```



| Illustration | SignsPost |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SignsPost.png) | ![illustration for SignsPost](../../fontawesome-6/Solid/SignsPost.Local.png) |




## SignsPost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SignsPost
include('fontawesome-6/Solid/SignsPost')

' renders the element
SignsPost('SignsPost', 'Signs Post', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignsPost
include('fontawesome-6/Solid/SignsPost')

' renders the element
SignsPost('SignsPost', 'Signs Post', 'an optional tech label', 'an optional description')
@enduml
```

