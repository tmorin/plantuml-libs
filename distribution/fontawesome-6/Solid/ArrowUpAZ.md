# ArrowUpAZ


```text
fontawesome-6/Solid/ArrowUpAZ
```

```text
include('fontawesome-6/Solid/ArrowUpAZ')
```



| Illustration | ArrowUpAZ |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowUpAZ.png) | ![illustration for ArrowUpAZ](../../fontawesome-6/Solid/ArrowUpAZ.Local.png) |




## ArrowUpAZ

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowUpAZ
include('fontawesome-6/Solid/ArrowUpAZ')

' renders the element
ArrowUpAZ('ArrowUpAz', 'Arrow Up Az', 'an optional tech label')
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

' loads the Item which embeds the element ArrowUpAZ
include('fontawesome-6/Solid/ArrowUpAZ')

' renders the element
ArrowUpAZ('ArrowUpAz', 'Arrow Up Az', 'an optional tech label')
@enduml
```

