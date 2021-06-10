# UserMinus


```text
fontawesome-5/Solid/UserMinus
```

```text
include('fontawesome-5/Solid/UserMinus')
```



| Illustration | UserMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserMinus.png) | ![illustration for UserMinus](../../fontawesome-5/Solid/UserMinus.Local.png) |




## UserMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserMinus
include('fontawesome-5/Solid/UserMinus')

' renders the element
UserMinus('UserMinus', 'User Minus', 'an optional tech label')
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

' loads the Item which embeds the element UserMinus
include('fontawesome-5/Solid/UserMinus')

' renders the element
UserMinus('UserMinus', 'User Minus', 'an optional tech label')
@enduml
```

