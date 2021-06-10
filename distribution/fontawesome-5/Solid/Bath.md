# Bath


```text
fontawesome-5/Solid/Bath
```

```text
include('fontawesome-5/Solid/Bath')
```



| Illustration | Bath |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bath.png) | ![illustration for Bath](../../fontawesome-5/Solid/Bath.Local.png) |




## Bath

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bath
include('fontawesome-5/Solid/Bath')

' renders the element
Bath('Bath', 'Bath', 'an optional tech label')
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

' loads the Item which embeds the element Bath
include('fontawesome-5/Solid/Bath')

' renders the element
Bath('Bath', 'Bath', 'an optional tech label')
@enduml
```

