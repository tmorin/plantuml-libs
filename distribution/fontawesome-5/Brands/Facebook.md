# Facebook


```text
fontawesome-5/Brands/Facebook
```

```text
include('fontawesome-5/Brands/Facebook')
```



| Illustration | Facebook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Facebook.png) | ![illustration for Facebook](../../fontawesome-5/Brands/Facebook.Local.png) |




## Facebook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Facebook
include('fontawesome-5/Brands/Facebook')

' renders the element
Facebook('Facebook', 'Facebook', 'an optional tech label')
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

' loads the Item which embeds the element Facebook
include('fontawesome-5/Brands/Facebook')

' renders the element
Facebook('Facebook', 'Facebook', 'an optional tech label')
@enduml
```

