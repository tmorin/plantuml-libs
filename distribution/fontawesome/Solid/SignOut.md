# SignOut


```text
fontawesome/Solid/SignOut
```

```text
include('fontawesome/Solid/SignOut')
```



| Illustration | SignOut |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SignOut.png) | ![illustration for SignOut](../../fontawesome/Solid/SignOut.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignOutXs>`
- `<$SignOutSm>`
- `<$SignOutMd>`
- `<$SignOutLg>`





## SignOut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SignOut
include('fontawesome/Solid/SignOut')

' renders the element
SignOut('SignOut', 'Sign Out', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignOut
include('fontawesome/Solid/SignOut')

' renders the element
SignOut('SignOut', 'Sign Out', 'an optional tech label', 'an optional description')
@enduml
```

