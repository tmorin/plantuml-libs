# Flask


```text
simpleicons-8/F/Flask
```

```text
include('simpleicons-8/F/Flask')
```



| Illustration | Flask |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Flask.png) | ![illustration for Flask](../../simpleicons-8/F/Flask.Local.png) |




## Flask

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Flask
include('simpleicons-8/F/Flask')

' renders the element
Flask('Flask', 'Flask', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Flask
include('simpleicons-8/F/Flask')

' renders the element
Flask('Flask', 'Flask', 'an optional tech label', 'an optional description')
@enduml
```

