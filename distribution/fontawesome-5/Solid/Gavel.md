# Gavel


```text
fontawesome-5/Solid/Gavel
```

```text
include('fontawesome-5/Solid/Gavel')
```



| Illustration | Gavel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Gavel.png) | ![illustration for Gavel](../../fontawesome-5/Solid/Gavel.Local.png) |




## Gavel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gavel
include('fontawesome-5/Solid/Gavel')

' renders the element
Gavel('Gavel', 'Gavel', 'an optional tech label')
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

' loads the Item which embeds the element Gavel
include('fontawesome-5/Solid/Gavel')

' renders the element
Gavel('Gavel', 'Gavel', 'an optional tech label')
@enduml
```

