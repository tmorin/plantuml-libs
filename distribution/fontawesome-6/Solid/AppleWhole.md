# AppleWhole


```text
fontawesome-6/Solid/AppleWhole
```

```text
include('fontawesome-6/Solid/AppleWhole')
```



| Illustration | AppleWhole |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AppleWhole.png) | ![illustration for AppleWhole](../../fontawesome-6/Solid/AppleWhole.Local.png) |




## AppleWhole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AppleWhole
include('fontawesome-6/Solid/AppleWhole')

' renders the element
AppleWhole('AppleWhole', 'Apple Whole', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AppleWhole
include('fontawesome-6/Solid/AppleWhole')

' renders the element
AppleWhole('AppleWhole', 'Apple Whole', 'an optional tech label', 'an optional description')
@enduml
```

