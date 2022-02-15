# FortAwesomeAlt


```text
fontawesome-6/Brands/FortAwesomeAlt
```

```text
include('fontawesome-6/Brands/FortAwesomeAlt')
```



| Illustration | FortAwesomeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/FortAwesomeAlt.png) | ![illustration for FortAwesomeAlt](../../fontawesome-6/Brands/FortAwesomeAlt.Local.png) |




## FortAwesomeAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FortAwesomeAlt
include('fontawesome-6/Brands/FortAwesomeAlt')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FortAwesomeAlt
include('fontawesome-6/Brands/FortAwesomeAlt')

' renders the element
FortAwesomeAlt('FortAwesomeAlt', 'Fort Awesome Alt', 'an optional tech label')
@enduml
```

