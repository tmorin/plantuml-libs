# Announcement


```text
material-4/Action/Announcement
```

```text
include('material-4/Action/Announcement')
```



| Illustration | Announcement |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Announcement.png) | ![illustration for Announcement](../../material-4/Action/Announcement.Local.png) |




## Announcement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Announcement
include('material-4/Action/Announcement')

' renders the element
Announcement('Announcement', 'Announcement', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Announcement
include('material-4/Action/Announcement')

' renders the element
Announcement('Announcement', 'Announcement', 'an optional tech label', 'an optional description')
@enduml
```

