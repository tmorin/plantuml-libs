# Sun


```text
fontawesome-5/Regular/Sun
```

```text
include('fontawesome-5/Regular/Sun')
```



| Illustration | Sun |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Sun.png) | ![illustration for Sun](../../fontawesome-5/Regular/Sun.Local.png) |




## Sun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sun
include('fontawesome-5/Regular/Sun')

' renders the element
Sun('Sun', 'Sun', 'an optional tech label')
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

' loads the Item which embeds the element Sun
include('fontawesome-5/Regular/Sun')

' renders the element
Sun('Sun', 'Sun', 'an optional tech label')
@enduml
```

