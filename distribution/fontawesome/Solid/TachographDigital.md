# TachographDigital


```text
fontawesome/Solid/TachographDigital
```

```text
include('fontawesome/Solid/TachographDigital')
```



| Illustration | TachographDigital |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TachographDigital.png) | ![illustration for TachographDigital](../../fontawesome/Solid/TachographDigital.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TachographDigitalXs>`
- `<$TachographDigitalSm>`
- `<$TachographDigitalMd>`
- `<$TachographDigitalLg>`





## TachographDigital

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TachographDigital
include('fontawesome/Solid/TachographDigital')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element TachographDigital
include('fontawesome/Solid/TachographDigital')

' renders the element
TachographDigital('TachographDigital', 'Tachograph Digital', 'an optional tech label', 'an optional description')
@enduml
```

