# LessThan


```text
fontawesome-5/Solid/LessThan
```

```text
include('fontawesome-5/Solid/LessThan')
```



| Illustration | LessThan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LessThan.png) | ![illustration for LessThan](../../fontawesome-5/Solid/LessThan.Local.png) |




## LessThan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LessThan
include('fontawesome-5/Solid/LessThan')

' renders the element
LessThan('LessThan', 'Less Than', 'an optional tech label')
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

' loads the Item which embeds the element LessThan
include('fontawesome-5/Solid/LessThan')

' renders the element
LessThan('LessThan', 'Less Than', 'an optional tech label')
@enduml
```

