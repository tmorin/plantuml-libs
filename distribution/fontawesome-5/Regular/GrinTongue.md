# GrinTongue


```text
fontawesome-5/Regular/GrinTongue
```

```text
include('fontawesome-5/Regular/GrinTongue')
```



| Illustration | GrinTongue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinTongue.png) | ![illustration for GrinTongue](../../fontawesome-5/Regular/GrinTongue.Local.png) |




## GrinTongue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinTongue
include('fontawesome-5/Regular/GrinTongue')

' renders the element
GrinTongue('GrinTongue', 'Grin Tongue', 'an optional tech label')
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

' loads the Item which embeds the element GrinTongue
include('fontawesome-5/Regular/GrinTongue')

' renders the element
GrinTongue('GrinTongue', 'Grin Tongue', 'an optional tech label')
@enduml
```

