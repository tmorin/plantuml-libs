# Bigbluebutton


```text
simpleicons-6/B/Bigbluebutton
```

```text
include('simpleicons-6/B/Bigbluebutton')
```



| Illustration | Bigbluebutton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bigbluebutton.png) | ![illustration for Bigbluebutton](../../simpleicons-6/B/Bigbluebutton.Local.png) |




## Bigbluebutton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bigbluebutton
include('simpleicons-6/B/Bigbluebutton')

' renders the element
Bigbluebutton('Bigbluebutton', 'Bigbluebutton', 'an optional tech label')
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

' loads the Item which embeds the element Bigbluebutton
include('simpleicons-6/B/Bigbluebutton')

' renders the element
Bigbluebutton('Bigbluebutton', 'Bigbluebutton', 'an optional tech label')
@enduml
```

