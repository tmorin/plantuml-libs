# KipSign


```text
fontawesome-6/Solid/KipSign
```

```text
include('fontawesome-6/Solid/KipSign')
```



| Illustration | KipSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/KipSign.png) | ![illustration for KipSign](../../fontawesome-6/Solid/KipSign.Local.png) |




## KipSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element KipSign
include('fontawesome-6/Solid/KipSign')

' renders the element
KipSign('KipSign', 'Kip Sign', 'an optional tech label')
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

' loads the Item which embeds the element KipSign
include('fontawesome-6/Solid/KipSign')

' renders the element
KipSign('KipSign', 'Kip Sign', 'an optional tech label')
@enduml
```

