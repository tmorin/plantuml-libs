# SignOutAlt


```text
fontawesome-5/Solid/SignOutAlt
```

```text
include('fontawesome-5/Solid/SignOutAlt')
```



| Illustration | SignOutAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SignOutAlt.png) | ![illustration for SignOutAlt](../../fontawesome-5/Solid/SignOutAlt.Local.png) |




## SignOutAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SignOutAlt
include('fontawesome-5/Solid/SignOutAlt')

' renders the element
SignOutAlt('SignOutAlt', 'Sign Out Alt', 'an optional tech label')
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

' loads the Item which embeds the element SignOutAlt
include('fontawesome-5/Solid/SignOutAlt')

' renders the element
SignOutAlt('SignOutAlt', 'Sign Out Alt', 'an optional tech label')
@enduml
```

