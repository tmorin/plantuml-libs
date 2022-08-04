# Cow


```text
fontawesome-6/Solid/Cow
```

```text
include('fontawesome-6/Solid/Cow')
```



| Illustration | Cow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Cow.png) | ![illustration for Cow](../../fontawesome-6/Solid/Cow.Local.png) |




## Cow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cow
include('fontawesome-6/Solid/Cow')

' renders the element
Cow('Cow', 'Cow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cow
include('fontawesome-6/Solid/Cow')

' renders the element
Cow('Cow', 'Cow', 'an optional tech label', 'an optional description')
@enduml
```

