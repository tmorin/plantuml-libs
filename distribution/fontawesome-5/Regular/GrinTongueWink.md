# GrinTongueWink


```text
fontawesome-5/Regular/GrinTongueWink
```

```text
include('fontawesome-5/Regular/GrinTongueWink')
```



| Illustration | GrinTongueWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinTongueWink.png) | ![illustration for GrinTongueWink](../../fontawesome-5/Regular/GrinTongueWink.Local.png) |




## GrinTongueWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinTongueWink
include('fontawesome-5/Regular/GrinTongueWink')

' renders the element
GrinTongueWink('GrinTongueWink', 'Grin Tongue Wink', 'an optional tech label')
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

' loads the Item which embeds the element GrinTongueWink
include('fontawesome-5/Regular/GrinTongueWink')

' renders the element
GrinTongueWink('GrinTongueWink', 'Grin Tongue Wink', 'an optional tech label')
@enduml
```

