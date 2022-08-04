# BarsProgress


```text
fontawesome-6/Solid/BarsProgress
```

```text
include('fontawesome-6/Solid/BarsProgress')
```



| Illustration | BarsProgress |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BarsProgress.png) | ![illustration for BarsProgress](../../fontawesome-6/Solid/BarsProgress.Local.png) |




## BarsProgress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BarsProgress
include('fontawesome-6/Solid/BarsProgress')

' renders the element
BarsProgress('BarsProgress', 'Bars Progress', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BarsProgress
include('fontawesome-6/Solid/BarsProgress')

' renders the element
BarsProgress('BarsProgress', 'Bars Progress', 'an optional tech label', 'an optional description')
@enduml
```

