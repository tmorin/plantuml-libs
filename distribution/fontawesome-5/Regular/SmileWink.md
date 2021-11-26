# SmileWink


```text
fontawesome-5/Regular/SmileWink
```

```text
include('fontawesome-5/Regular/SmileWink')
```



| Illustration | SmileWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/SmileWink.png) | ![illustration for SmileWink](../../fontawesome-5/Regular/SmileWink.Local.png) |




## SmileWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SmileWink
include('fontawesome-5/Regular/SmileWink')

' renders the element
SmileWink('SmileWink', 'Smile Wink', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SmileWink
include('fontawesome-5/Regular/SmileWink')

' renders the element
SmileWink('SmileWink', 'Smile Wink', 'an optional tech label')
@enduml
```

