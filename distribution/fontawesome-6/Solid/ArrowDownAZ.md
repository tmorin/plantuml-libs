# ArrowDownAZ


```text
fontawesome-6/Solid/ArrowDownAZ
```

```text
include('fontawesome-6/Solid/ArrowDownAZ')
```



| Illustration | ArrowDownAZ |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowDownAZ.png) | ![illustration for ArrowDownAZ](../../fontawesome-6/Solid/ArrowDownAZ.Local.png) |




## ArrowDownAZ

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowDownAZ
include('fontawesome-6/Solid/ArrowDownAZ')

' renders the element
ArrowDownAZ('ArrowDownAz', 'Arrow Down Az', 'an optional tech label')
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

' loads the Item which embeds the element ArrowDownAZ
include('fontawesome-6/Solid/ArrowDownAZ')

' renders the element
ArrowDownAZ('ArrowDownAz', 'Arrow Down Az', 'an optional tech label')
@enduml
```

