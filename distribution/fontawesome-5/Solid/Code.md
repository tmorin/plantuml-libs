# Code


```text
fontawesome-5/Solid/Code
```

```text
include('fontawesome-5/Solid/Code')
```



| Illustration | Code |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Code.png) | ![illustration for Code](../../fontawesome-5/Solid/Code.Local.png) |




## Code

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Code
include('fontawesome-5/Solid/Code')

' renders the element
Code('Code', 'Code', 'an optional tech label')
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

' loads the Item which embeds the element Code
include('fontawesome-5/Solid/Code')

' renders the element
Code('Code', 'Code', 'an optional tech label')
@enduml
```

