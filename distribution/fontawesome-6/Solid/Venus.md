# Venus


```text
fontawesome-6/Solid/Venus
```

```text
include('fontawesome-6/Solid/Venus')
```



| Illustration | Venus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Venus.png) | ![illustration for Venus](../../fontawesome-6/Solid/Venus.Local.png) |




## Venus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Venus
include('fontawesome-6/Solid/Venus')

' renders the element
Venus('Venus', 'Venus', 'an optional tech label')
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

' loads the Item which embeds the element Venus
include('fontawesome-6/Solid/Venus')

' renders the element
Venus('Venus', 'Venus', 'an optional tech label')
@enduml
```

