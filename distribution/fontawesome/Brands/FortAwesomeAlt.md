# FortAwesomeAlt


```text
fontawesome/Brands/FortAwesomeAlt
```

```text
include('fontawesome/Brands/FortAwesomeAlt')
```



| Illustration | FortAwesomeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/FortAwesomeAlt.png) | ![illustration for FortAwesomeAlt](../../fontawesome/Brands/FortAwesomeAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FortAwesomeAltXs>`
- `<$FortAwesomeAltSm>`
- `<$FortAwesomeAltMd>`
- `<$FortAwesomeAltLg>`





## FortAwesomeAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FortAwesomeAlt
include('fontawesome/Brands/FortAwesomeAlt')

' renders the element
FortAwesomeAlt('FortAwesomeAlt', 'Fort Awesome Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FortAwesomeAlt
include('fontawesome/Brands/FortAwesomeAlt')

' renders the element
FortAwesomeAlt('FortAwesomeAlt', 'Fort Awesome Alt', 'an optional tech label', 'an optional description')
@enduml
```

