# UnlockKeyhole


```text
fontawesome-6/Solid/UnlockKeyhole
```

```text
include('fontawesome-6/Solid/UnlockKeyhole')
```



| Illustration | UnlockKeyhole |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UnlockKeyhole.png) | ![illustration for UnlockKeyhole](../../fontawesome-6/Solid/UnlockKeyhole.Local.png) |




## UnlockKeyhole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UnlockKeyhole
include('fontawesome-6/Solid/UnlockKeyhole')

' renders the element
UnlockKeyhole('UnlockKeyhole', 'Unlock Keyhole', 'an optional tech label')
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

' loads the Item which embeds the element UnlockKeyhole
include('fontawesome-6/Solid/UnlockKeyhole')

' renders the element
UnlockKeyhole('UnlockKeyhole', 'Unlock Keyhole', 'an optional tech label')
@enduml
```

