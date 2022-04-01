# ArrowsDownToLine


```text
fontawesome-6/Solid/ArrowsDownToLine
```

```text
include('fontawesome-6/Solid/ArrowsDownToLine')
```



| Illustration | ArrowsDownToLine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowsDownToLine.png) | ![illustration for ArrowsDownToLine](../../fontawesome-6/Solid/ArrowsDownToLine.Local.png) |




## ArrowsDownToLine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowsDownToLine
include('fontawesome-6/Solid/ArrowsDownToLine')

' renders the element
ArrowsDownToLine('ArrowsDownToLine', 'Arrows Down To Line', 'an optional tech label')
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

' loads the Item which embeds the element ArrowsDownToLine
include('fontawesome-6/Solid/ArrowsDownToLine')

' renders the element
ArrowsDownToLine('ArrowsDownToLine', 'Arrows Down To Line', 'an optional tech label')
@enduml
```

