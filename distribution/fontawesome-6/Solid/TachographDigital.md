# TachographDigital


```text
fontawesome-6/Solid/TachographDigital
```

```text
include('fontawesome-6/Solid/TachographDigital')
```



| Illustration | TachographDigital |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TachographDigital.png) | ![illustration for TachographDigital](../../fontawesome-6/Solid/TachographDigital.Local.png) |




## TachographDigital

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TachographDigital
include('fontawesome-6/Solid/TachographDigital')

' renders the element
TachographDigital('TachographDigital', 'Tachograph Digital', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TachographDigital
include('fontawesome-6/Solid/TachographDigital')

' renders the element
TachographDigital('TachographDigital', 'Tachograph Digital', 'an optional tech label', 'an optional description')
@enduml
```

