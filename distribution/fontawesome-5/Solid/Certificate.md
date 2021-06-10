# Certificate


```text
fontawesome-5/Solid/Certificate
```

```text
include('fontawesome-5/Solid/Certificate')
```



| Illustration | Certificate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Certificate.png) | ![illustration for Certificate](../../fontawesome-5/Solid/Certificate.Local.png) |




## Certificate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Certificate
include('fontawesome-5/Solid/Certificate')

' renders the element
Certificate('Certificate', 'Certificate', 'an optional tech label')
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

' loads the Item which embeds the element Certificate
include('fontawesome-5/Solid/Certificate')

' renders the element
Certificate('Certificate', 'Certificate', 'an optional tech label')
@enduml
```

