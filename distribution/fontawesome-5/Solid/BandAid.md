# BandAid


```text
fontawesome-5/Solid/BandAid
```

```text
include('fontawesome-5/Solid/BandAid')
```



| Illustration | BandAid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BandAid.png) | ![illustration for BandAid](../../fontawesome-5/Solid/BandAid.Local.png) |




## BandAid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BandAid
include('fontawesome-5/Solid/BandAid')

' renders the element
BandAid('BandAid', 'Band Aid', 'an optional tech label')
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

' loads the Item which embeds the element BandAid
include('fontawesome-5/Solid/BandAid')

' renders the element
BandAid('BandAid', 'Band Aid', 'an optional tech label')
@enduml
```

