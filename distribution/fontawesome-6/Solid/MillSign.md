# MillSign


```text
fontawesome-6/Solid/MillSign
```

```text
include('fontawesome-6/Solid/MillSign')
```



| Illustration | MillSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MillSign.png) | ![illustration for MillSign](../../fontawesome-6/Solid/MillSign.Local.png) |




## MillSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MillSign
include('fontawesome-6/Solid/MillSign')

' renders the element
MillSign('MillSign', 'Mill Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MillSign
include('fontawesome-6/Solid/MillSign')

' renders the element
MillSign('MillSign', 'Mill Sign', 'an optional tech label', 'an optional description')
@enduml
```

