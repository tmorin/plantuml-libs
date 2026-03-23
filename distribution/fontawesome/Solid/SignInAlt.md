# SignInAlt


```text
fontawesome/Solid/SignInAlt
```

```text
include('fontawesome/Solid/SignInAlt')
```



| Illustration | SignInAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SignInAlt.png) | ![illustration for SignInAlt](../../fontawesome/Solid/SignInAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignInAltXs>`
- `<$SignInAltSm>`
- `<$SignInAltMd>`
- `<$SignInAltLg>`





## SignInAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SignInAlt
include('fontawesome/Solid/SignInAlt')

' renders the element
SignInAlt('SignInAlt', 'Sign In Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignInAlt
include('fontawesome/Solid/SignInAlt')

' renders the element
SignInAlt('SignInAlt', 'Sign In Alt', 'an optional tech label', 'an optional description')
@enduml
```

