# ArrowUpLong


```text
fontawesome-6/Solid/ArrowUpLong
```

```text
include('fontawesome-6/Solid/ArrowUpLong')
```



| Illustration | ArrowUpLong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowUpLong.png) | ![illustration for ArrowUpLong](../../fontawesome-6/Solid/ArrowUpLong.Local.png) |




## ArrowUpLong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowUpLong
include('fontawesome-6/Solid/ArrowUpLong')

' renders the element
ArrowUpLong('ArrowUpLong', 'Arrow Up Long', 'an optional tech label')
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

' loads the Item which embeds the element ArrowUpLong
include('fontawesome-6/Solid/ArrowUpLong')

' renders the element
ArrowUpLong('ArrowUpLong', 'Arrow Up Long', 'an optional tech label')
@enduml
```

