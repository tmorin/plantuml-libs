# Teamspeak


```text
simpleicons-5/T/Teamspeak
```

```text
include('simpleicons-5/T/Teamspeak')
```



| Illustration | Teamspeak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Teamspeak.png) | ![illustration for Teamspeak](../../simpleicons-5/T/Teamspeak.Local.png) |




## Teamspeak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Teamspeak
include('simpleicons-5/T/Teamspeak')

' renders the element
Teamspeak('Teamspeak', 'Teamspeak', 'an optional tech label')
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

' loads the Item which embeds the element Teamspeak
include('simpleicons-5/T/Teamspeak')

' renders the element
Teamspeak('Teamspeak', 'Teamspeak', 'an optional tech label')
@enduml
```

