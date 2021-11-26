# LaughWink


```text
fontawesome-5/Regular/LaughWink
```

```text
include('fontawesome-5/Regular/LaughWink')
```



| Illustration | LaughWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/LaughWink.png) | ![illustration for LaughWink](../../fontawesome-5/Regular/LaughWink.Local.png) |




## LaughWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LaughWink
include('fontawesome-5/Regular/LaughWink')

' renders the element
LaughWink('LaughWink', 'Laugh Wink', 'an optional tech label')
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

' loads the Item which embeds the element LaughWink
include('fontawesome-5/Regular/LaughWink')

' renders the element
LaughWink('LaughWink', 'Laugh Wink', 'an optional tech label')
@enduml
```

