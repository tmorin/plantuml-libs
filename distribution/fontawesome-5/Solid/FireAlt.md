# FireAlt


```text
fontawesome-5/Solid/FireAlt
```

```text
include('fontawesome-5/Solid/FireAlt')
```



| Illustration | FireAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FireAlt.png) | ![illustration for FireAlt](../../fontawesome-5/Solid/FireAlt.Local.png) |




## FireAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FireAlt
include('fontawesome-5/Solid/FireAlt')

' renders the element
FireAlt('FireAlt', 'Fire Alt', 'an optional tech label')
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

' loads the Item which embeds the element FireAlt
include('fontawesome-5/Solid/FireAlt')

' renders the element
FireAlt('FireAlt', 'Fire Alt', 'an optional tech label')
@enduml
```

