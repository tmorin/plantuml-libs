# Loop


```text
material-4/Av/Loop
```

```text
include('material-4/Av/Loop')
```



| Illustration | Loop |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Loop.png) | ![illustration for Loop](../../material-4/Av/Loop.Local.png) |




## Loop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Loop
include('material-4/Av/Loop')

' renders the element
Loop('Loop', 'Loop', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Loop
include('material-4/Av/Loop')

' renders the element
Loop('Loop', 'Loop', 'an optional tech label', 'an optional description')
@enduml
```

