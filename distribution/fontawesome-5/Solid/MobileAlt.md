# MobileAlt


```text
fontawesome-5/Solid/MobileAlt
```

```text
include('fontawesome-5/Solid/MobileAlt')
```



| Illustration | MobileAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MobileAlt.png) | ![illustration for MobileAlt](../../fontawesome-5/Solid/MobileAlt.Local.png) |




## MobileAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MobileAlt
include('fontawesome-5/Solid/MobileAlt')

' renders the element
MobileAlt('MobileAlt', 'Mobile Alt', 'an optional tech label')
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

' loads the Item which embeds the element MobileAlt
include('fontawesome-5/Solid/MobileAlt')

' renders the element
MobileAlt('MobileAlt', 'Mobile Alt', 'an optional tech label')
@enduml
```

