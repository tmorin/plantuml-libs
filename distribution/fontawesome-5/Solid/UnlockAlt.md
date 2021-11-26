# UnlockAlt


```text
fontawesome-5/Solid/UnlockAlt
```

```text
include('fontawesome-5/Solid/UnlockAlt')
```



| Illustration | UnlockAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UnlockAlt.png) | ![illustration for UnlockAlt](../../fontawesome-5/Solid/UnlockAlt.Local.png) |




## UnlockAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UnlockAlt
include('fontawesome-5/Solid/UnlockAlt')

' renders the element
UnlockAlt('UnlockAlt', 'Unlock Alt', 'an optional tech label')
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

' loads the Item which embeds the element UnlockAlt
include('fontawesome-5/Solid/UnlockAlt')

' renders the element
UnlockAlt('UnlockAlt', 'Unlock Alt', 'an optional tech label')
@enduml
```

