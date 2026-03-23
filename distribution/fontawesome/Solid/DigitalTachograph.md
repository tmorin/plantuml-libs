# DigitalTachograph


```text
fontawesome/Solid/DigitalTachograph
```

```text
include('fontawesome/Solid/DigitalTachograph')
```



| Illustration | DigitalTachograph |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DigitalTachograph.png) | ![illustration for DigitalTachograph](../../fontawesome/Solid/DigitalTachograph.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DigitalTachographXs>`
- `<$DigitalTachographSm>`
- `<$DigitalTachographMd>`
- `<$DigitalTachographLg>`





## DigitalTachograph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DigitalTachograph
include('fontawesome/Solid/DigitalTachograph')

' renders the element
DigitalTachograph('DigitalTachograph', 'Digital Tachograph', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DigitalTachograph
include('fontawesome/Solid/DigitalTachograph')

' renders the element
DigitalTachograph('DigitalTachograph', 'Digital Tachograph', 'an optional tech label', 'an optional description')
@enduml
```

