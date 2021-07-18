# Bigbluebutton


```text
simpleicons-5/B/Bigbluebutton
```

```text
include('simpleicons-5/B/Bigbluebutton')
```



| Illustration | Bigbluebutton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bigbluebutton.png) | ![illustration for Bigbluebutton](../../simpleicons-5/B/Bigbluebutton.Local.png) |




## Bigbluebutton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bigbluebutton
include('simpleicons-5/B/Bigbluebutton')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bigbluebutton
include('simpleicons-5/B/Bigbluebutton')

' renders the element
Bigbluebutton('Bigbluebutton', 'Bigbluebutton', 'an optional tech label')
@enduml
```

