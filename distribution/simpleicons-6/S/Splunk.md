# Splunk


```text
simpleicons-6/S/Splunk
```

```text
include('simpleicons-6/S/Splunk')
```



| Illustration | Splunk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Splunk.png) | ![illustration for Splunk](../../simpleicons-6/S/Splunk.Local.png) |




## Splunk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Splunk
include('simpleicons-6/S/Splunk')

' renders the element
Splunk('Splunk', 'Splunk', 'an optional tech label')
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

' loads the Item which embeds the element Splunk
include('simpleicons-6/S/Splunk')

' renders the element
Splunk('Splunk', 'Splunk', 'an optional tech label')
@enduml
```

