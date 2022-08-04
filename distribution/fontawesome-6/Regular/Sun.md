# Sun


```text
fontawesome-6/Regular/Sun
```

```text
include('fontawesome-6/Regular/Sun')
```



| Illustration | Sun |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Sun.png) | ![illustration for Sun](../../fontawesome-6/Regular/Sun.Local.png) |




## Sun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Sun
include('fontawesome-6/Regular/Sun')

' renders the element
Sun('Sun', 'Sun', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sun
include('fontawesome-6/Regular/Sun')

' renders the element
Sun('Sun', 'Sun', 'an optional tech label', 'an optional description')
@enduml
```

