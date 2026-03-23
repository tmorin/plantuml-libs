# RadiationAlt


```text
fontawesome/Solid/RadiationAlt
```

```text
include('fontawesome/Solid/RadiationAlt')
```



| Illustration | RadiationAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RadiationAlt.png) | ![illustration for RadiationAlt](../../fontawesome/Solid/RadiationAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RadiationAltXs>`
- `<$RadiationAltSm>`
- `<$RadiationAltMd>`
- `<$RadiationAltLg>`





## RadiationAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RadiationAlt
include('fontawesome/Solid/RadiationAlt')

' renders the element
RadiationAlt('RadiationAlt', 'Radiation Alt', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element RadiationAlt
include('fontawesome/Solid/RadiationAlt')

' renders the element
RadiationAlt('RadiationAlt', 'Radiation Alt', 'an optional tech label', 'an optional description')
@enduml
```

