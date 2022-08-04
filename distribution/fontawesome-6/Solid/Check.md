# Check


```text
fontawesome-6/Solid/Check
```

```text
include('fontawesome-6/Solid/Check')
```



| Illustration | Check |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Check.png) | ![illustration for Check](../../fontawesome-6/Solid/Check.Local.png) |




## Check

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Check
include('fontawesome-6/Solid/Check')

' renders the element
Check('Check', 'Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Check
include('fontawesome-6/Solid/Check')

' renders the element
Check('Check', 'Check', 'an optional tech label', 'an optional description')
@enduml
```

