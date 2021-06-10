# FortAwesomeAlt


```text
fontawesome-5/Brands/FortAwesomeAlt
```

```text
include('fontawesome-5/Brands/FortAwesomeAlt')
```



| Illustration | FortAwesomeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FortAwesomeAlt.png) | ![illustration for FortAwesomeAlt](../../fontawesome-5/Brands/FortAwesomeAlt.Local.png) |




## FortAwesomeAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FortAwesomeAlt
include('fontawesome-5/Brands/FortAwesomeAlt')

' renders the element
FortAwesomeAlt('FortAwesomeAlt', 'Fort Awesome Alt', 'an optional tech label')
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

' loads the Item which embeds the element FortAwesomeAlt
include('fontawesome-5/Brands/FortAwesomeAlt')

' renders the element
FortAwesomeAlt('FortAwesomeAlt', 'Fort Awesome Alt', 'an optional tech label')
@enduml
```

