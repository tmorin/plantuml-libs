# ArrowUpZA


```text
fontawesome-6/Solid/ArrowUpZA
```

```text
include('fontawesome-6/Solid/ArrowUpZA')
```



| Illustration | ArrowUpZA |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowUpZA.png) | ![illustration for ArrowUpZA](../../fontawesome-6/Solid/ArrowUpZA.Local.png) |




## ArrowUpZA

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowUpZA
include('fontawesome-6/Solid/ArrowUpZA')

' renders the element
ArrowUpZA('ArrowUpZa', 'Arrow Up Za', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowUpZA
include('fontawesome-6/Solid/ArrowUpZA')

' renders the element
ArrowUpZA('ArrowUpZa', 'Arrow Up Za', 'an optional tech label', 'an optional description')
@enduml
```

