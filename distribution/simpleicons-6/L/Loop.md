# Loop


```text
simpleicons-6/L/Loop
```

```text
include('simpleicons-6/L/Loop')
```



| Illustration | Loop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Loop.png) | ![illustration for Loop](../../simpleicons-6/L/Loop.Local.png) |




## Loop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Loop
include('simpleicons-6/L/Loop')

' renders the element
Loop('Loop', 'Loop', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Loop
include('simpleicons-6/L/Loop')

' renders the element
Loop('Loop', 'Loop', 'an optional tech label')
@enduml
```

