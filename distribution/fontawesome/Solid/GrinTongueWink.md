# GrinTongueWink


```text
fontawesome/Solid/GrinTongueWink
```

```text
include('fontawesome/Solid/GrinTongueWink')
```



| Illustration | GrinTongueWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinTongueWink.png) | ![illustration for GrinTongueWink](../../fontawesome/Solid/GrinTongueWink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinTongueWinkXs>`
- `<$GrinTongueWinkSm>`
- `<$GrinTongueWinkMd>`
- `<$GrinTongueWinkLg>`





## GrinTongueWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinTongueWink
include('fontawesome/Solid/GrinTongueWink')

' renders the element
GrinTongueWink('GrinTongueWink', 'Grin Tongue Wink', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinTongueWink
include('fontawesome/Solid/GrinTongueWink')

' renders the element
GrinTongueWink('GrinTongueWink', 'Grin Tongue Wink', 'an optional tech label', 'an optional description')
@enduml
```

