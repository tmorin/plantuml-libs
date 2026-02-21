# FireFlameCurved


```text
fontawesome/Solid/FireFlameCurved
```

```text
include('fontawesome/Solid/FireFlameCurved')
```



| Illustration | FireFlameCurved |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FireFlameCurved.png) | ![illustration for FireFlameCurved](../../fontawesome/Solid/FireFlameCurved.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FireFlameCurvedXs>`
- `<$FireFlameCurvedSm>`
- `<$FireFlameCurvedMd>`
- `<$FireFlameCurvedLg>`





## FireFlameCurved

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FireFlameCurved
include('fontawesome/Solid/FireFlameCurved')

' renders the element
FireFlameCurved('FireFlameCurved', 'Fire Flame Curved', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FireFlameCurved
include('fontawesome/Solid/FireFlameCurved')

' renders the element
FireFlameCurved('FireFlameCurved', 'Fire Flame Curved', 'an optional tech label', 'an optional description')
@enduml
```

