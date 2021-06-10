# Forward


```text
fontawesome-5/Solid/Forward
```

```text
include('fontawesome-5/Solid/Forward')
```



| Illustration | Forward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Forward.png) | ![illustration for Forward](../../fontawesome-5/Solid/Forward.Local.png) |




## Forward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Forward
include('fontawesome-5/Solid/Forward')

' renders the element
Forward('Forward', 'Forward', 'an optional tech label')
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

' loads the Item which embeds the element Forward
include('fontawesome-5/Solid/Forward')

' renders the element
Forward('Forward', 'Forward', 'an optional tech label')
@enduml
```

