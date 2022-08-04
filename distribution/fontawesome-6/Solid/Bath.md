# Bath


```text
fontawesome-6/Solid/Bath
```

```text
include('fontawesome-6/Solid/Bath')
```



| Illustration | Bath |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bath.png) | ![illustration for Bath](../../fontawesome-6/Solid/Bath.Local.png) |




## Bath

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bath
include('fontawesome-6/Solid/Bath')

' renders the element
Bath('Bath', 'Bath', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bath
include('fontawesome-6/Solid/Bath')

' renders the element
Bath('Bath', 'Bath', 'an optional tech label', 'an optional description')
@enduml
```

