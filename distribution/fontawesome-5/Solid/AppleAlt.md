# AppleAlt


```text
fontawesome-5/Solid/AppleAlt
```

```text
include('fontawesome-5/Solid/AppleAlt')
```



| Illustration | AppleAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/AppleAlt.png) | ![illustration for AppleAlt](../../fontawesome-5/Solid/AppleAlt.Local.png) |




## AppleAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AppleAlt
include('fontawesome-5/Solid/AppleAlt')

' renders the element
AppleAlt('AppleAlt', 'Apple Alt', 'an optional tech label')
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

' loads the Item which embeds the element AppleAlt
include('fontawesome-5/Solid/AppleAlt')

' renders the element
AppleAlt('AppleAlt', 'Apple Alt', 'an optional tech label')
@enduml
```

