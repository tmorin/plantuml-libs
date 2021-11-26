# PoundSign


```text
fontawesome-5/Solid/PoundSign
```

```text
include('fontawesome-5/Solid/PoundSign')
```



| Illustration | PoundSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PoundSign.png) | ![illustration for PoundSign](../../fontawesome-5/Solid/PoundSign.Local.png) |




## PoundSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PoundSign
include('fontawesome-5/Solid/PoundSign')

' renders the element
PoundSign('PoundSign', 'Pound Sign', 'an optional tech label')
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

' loads the Item which embeds the element PoundSign
include('fontawesome-5/Solid/PoundSign')

' renders the element
PoundSign('PoundSign', 'Pound Sign', 'an optional tech label')
@enduml
```

