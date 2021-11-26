# YenSign


```text
fontawesome-5/Solid/YenSign
```

```text
include('fontawesome-5/Solid/YenSign')
```



| Illustration | YenSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/YenSign.png) | ![illustration for YenSign](../../fontawesome-5/Solid/YenSign.Local.png) |




## YenSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element YenSign
include('fontawesome-5/Solid/YenSign')

' renders the element
YenSign('YenSign', 'Yen Sign', 'an optional tech label')
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

' loads the Item which embeds the element YenSign
include('fontawesome-5/Solid/YenSign')

' renders the element
YenSign('YenSign', 'Yen Sign', 'an optional tech label')
@enduml
```

