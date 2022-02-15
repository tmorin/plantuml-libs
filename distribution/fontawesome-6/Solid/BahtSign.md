# BahtSign


```text
fontawesome-6/Solid/BahtSign
```

```text
include('fontawesome-6/Solid/BahtSign')
```



| Illustration | BahtSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BahtSign.png) | ![illustration for BahtSign](../../fontawesome-6/Solid/BahtSign.Local.png) |




## BahtSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BahtSign
include('fontawesome-6/Solid/BahtSign')

' renders the element
BahtSign('BahtSign', 'Baht Sign', 'an optional tech label')
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

' loads the Item which embeds the element BahtSign
include('fontawesome-6/Solid/BahtSign')

' renders the element
BahtSign('BahtSign', 'Baht Sign', 'an optional tech label')
@enduml
```

