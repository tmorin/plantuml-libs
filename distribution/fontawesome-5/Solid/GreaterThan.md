# GreaterThan


```text
fontawesome-5/Solid/GreaterThan
```

```text
include('fontawesome-5/Solid/GreaterThan')
```



| Illustration | GreaterThan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GreaterThan.png) | ![illustration for GreaterThan](../../fontawesome-5/Solid/GreaterThan.Local.png) |




## GreaterThan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GreaterThan
include('fontawesome-5/Solid/GreaterThan')

' renders the element
GreaterThan('GreaterThan', 'Greater Than', 'an optional tech label')
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

' loads the Item which embeds the element GreaterThan
include('fontawesome-5/Solid/GreaterThan')

' renders the element
GreaterThan('GreaterThan', 'Greater Than', 'an optional tech label')
@enduml
```

