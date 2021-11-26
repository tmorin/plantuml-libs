# Check


```text
fontawesome-5/Solid/Check
```

```text
include('fontawesome-5/Solid/Check')
```



| Illustration | Check |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Check.png) | ![illustration for Check](../../fontawesome-5/Solid/Check.Local.png) |




## Check

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Check
include('fontawesome-5/Solid/Check')

' renders the element
Check('Check', 'Check', 'an optional tech label')
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

' loads the Item which embeds the element Check
include('fontawesome-5/Solid/Check')

' renders the element
Check('Check', 'Check', 'an optional tech label')
@enduml
```

