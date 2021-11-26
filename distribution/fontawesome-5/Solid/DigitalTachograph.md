# DigitalTachograph


```text
fontawesome-5/Solid/DigitalTachograph
```

```text
include('fontawesome-5/Solid/DigitalTachograph')
```



| Illustration | DigitalTachograph |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DigitalTachograph.png) | ![illustration for DigitalTachograph](../../fontawesome-5/Solid/DigitalTachograph.Local.png) |




## DigitalTachograph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DigitalTachograph
include('fontawesome-5/Solid/DigitalTachograph')

' renders the element
DigitalTachograph('DigitalTachograph', 'Digital Tachograph', 'an optional tech label')
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

' loads the Item which embeds the element DigitalTachograph
include('fontawesome-5/Solid/DigitalTachograph')

' renders the element
DigitalTachograph('DigitalTachograph', 'Digital Tachograph', 'an optional tech label')
@enduml
```

