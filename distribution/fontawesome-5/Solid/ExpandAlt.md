# ExpandAlt


```text
fontawesome-5/Solid/ExpandAlt
```

```text
include('fontawesome-5/Solid/ExpandAlt')
```



| Illustration | ExpandAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ExpandAlt.png) | ![illustration for ExpandAlt](../../fontawesome-5/Solid/ExpandAlt.Local.png) |




## ExpandAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ExpandAlt
include('fontawesome-5/Solid/ExpandAlt')

' renders the element
ExpandAlt('ExpandAlt', 'Expand Alt', 'an optional tech label')
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

' loads the Item which embeds the element ExpandAlt
include('fontawesome-5/Solid/ExpandAlt')

' renders the element
ExpandAlt('ExpandAlt', 'Expand Alt', 'an optional tech label')
@enduml
```

