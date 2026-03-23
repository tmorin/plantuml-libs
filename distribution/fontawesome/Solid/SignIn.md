# SignIn


```text
fontawesome/Solid/SignIn
```

```text
include('fontawesome/Solid/SignIn')
```



| Illustration | SignIn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SignIn.png) | ![illustration for SignIn](../../fontawesome/Solid/SignIn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignInXs>`
- `<$SignInSm>`
- `<$SignInMd>`
- `<$SignInLg>`





## SignIn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SignIn
include('fontawesome/Solid/SignIn')

' renders the element
SignIn('SignIn', 'Sign In', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignIn
include('fontawesome/Solid/SignIn')

' renders the element
SignIn('SignIn', 'Sign In', 'an optional tech label', 'an optional description')
@enduml
```

