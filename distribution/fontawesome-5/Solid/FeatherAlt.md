# FeatherAlt


```text
fontawesome-5/Solid/FeatherAlt
```

```text
include('fontawesome-5/Solid/FeatherAlt')
```



| Illustration | FeatherAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FeatherAlt.png) | ![illustration for FeatherAlt](../../fontawesome-5/Solid/FeatherAlt.Local.png) |




## FeatherAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FeatherAlt
include('fontawesome-5/Solid/FeatherAlt')

' renders the element
FeatherAlt('FeatherAlt', 'Feather Alt', 'an optional tech label')
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

' loads the Item which embeds the element FeatherAlt
include('fontawesome-5/Solid/FeatherAlt')

' renders the element
FeatherAlt('FeatherAlt', 'Feather Alt', 'an optional tech label')
@enduml
```

