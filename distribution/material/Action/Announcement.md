# Announcement


```text
material/Action/Announcement
```

```text
include('material/Action/Announcement')
```



| Illustration | Announcement |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Announcement.png) | ![illustration for Announcement](../../material/Action/Announcement.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnnouncementXs>`
- `<$AnnouncementSm>`
- `<$AnnouncementMd>`
- `<$AnnouncementLg>`





## Announcement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Announcement
include('material/Action/Announcement')

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
include('material/bootstrap')

' loads the Item which embeds the element Announcement
include('material/Action/Announcement')

' renders the element
Announcement('Announcement', 'Announcement', 'an optional tech label', 'an optional description')
@enduml
```

