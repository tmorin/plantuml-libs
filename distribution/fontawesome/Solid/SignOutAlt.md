# SignOutAlt


```text
fontawesome/Solid/SignOutAlt
```

```text
include('fontawesome/Solid/SignOutAlt')
```



| Illustration | SignOutAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SignOutAlt.png) | ![illustration for SignOutAlt](../../fontawesome/Solid/SignOutAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignOutAltXs>`
- `<$SignOutAltSm>`
- `<$SignOutAltMd>`
- `<$SignOutAltLg>`





## SignOutAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SignOutAlt
include('fontawesome/Solid/SignOutAlt')

' renders the element
SignOutAlt('SignOutAlt', 'Sign Out Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignOutAlt
include('fontawesome/Solid/SignOutAlt')

' renders the element
SignOutAlt('SignOutAlt', 'Sign Out Alt', 'an optional tech label', 'an optional description')
@enduml
```

