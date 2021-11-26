# RadiationAlt


```text
fontawesome-5/Solid/RadiationAlt
```

```text
include('fontawesome-5/Solid/RadiationAlt')
```



| Illustration | RadiationAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/RadiationAlt.png) | ![illustration for RadiationAlt](../../fontawesome-5/Solid/RadiationAlt.Local.png) |




## RadiationAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RadiationAlt
include('fontawesome-5/Solid/RadiationAlt')

' renders the element
RadiationAlt('RadiationAlt', 'Radiation Alt', 'an optional tech label')
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

' loads the Item which embeds the element RadiationAlt
include('fontawesome-5/Solid/RadiationAlt')

' renders the element
RadiationAlt('RadiationAlt', 'Radiation Alt', 'an optional tech label')
@enduml
```

