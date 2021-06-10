# SignInAlt


```text
fontawesome-5/Solid/SignInAlt
```

```text
include('fontawesome-5/Solid/SignInAlt')
```



| Illustration | SignInAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SignInAlt.png) | ![illustration for SignInAlt](../../fontawesome-5/Solid/SignInAlt.Local.png) |




## SignInAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SignInAlt
include('fontawesome-5/Solid/SignInAlt')

' renders the element
SignInAlt('SignInAlt', 'Sign In Alt', 'an optional tech label')
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

' loads the Item which embeds the element SignInAlt
include('fontawesome-5/Solid/SignInAlt')

' renders the element
SignInAlt('SignInAlt', 'Sign In Alt', 'an optional tech label')
@enduml
```

