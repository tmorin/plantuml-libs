# GroupWork


```text
material-4/Action/GroupWork
```

```text
include('material-4/Action/GroupWork')
```



| Illustration | GroupWork |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/GroupWork.png) | ![illustration for GroupWork](../../material-4/Action/GroupWork.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupWorkXs>`
- `<$GroupWorkSm>`
- `<$GroupWorkMd>`
- `<$GroupWorkLg>`





## GroupWork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GroupWork
include('material-4/Action/GroupWork')

' renders the element
GroupWork('GroupWork', 'Group Work', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GroupWork
include('material-4/Action/GroupWork')

' renders the element
GroupWork('GroupWork', 'Group Work', 'an optional tech label', 'an optional description')
@enduml
```

