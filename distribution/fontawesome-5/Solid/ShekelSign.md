# ShekelSign


```text
fontawesome-5/Solid/ShekelSign
```

```text
include('fontawesome-5/Solid/ShekelSign')
```



| Illustration | ShekelSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShekelSign.png) | ![illustration for ShekelSign](../../fontawesome-5/Solid/ShekelSign.Local.png) |




## ShekelSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShekelSign
include('fontawesome-5/Solid/ShekelSign')

' renders the element
ShekelSign('ShekelSign', 'Shekel Sign', 'an optional tech label')
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

' loads the Item which embeds the element ShekelSign
include('fontawesome-5/Solid/ShekelSign')

' renders the element
ShekelSign('ShekelSign', 'Shekel Sign', 'an optional tech label')
@enduml
```

