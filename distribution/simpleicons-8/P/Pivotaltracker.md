# Pivotaltracker


```text
simpleicons-8/P/Pivotaltracker
```

```text
include('simpleicons-8/P/Pivotaltracker')
```



| Illustration | Pivotaltracker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pivotaltracker.png) | ![illustration for Pivotaltracker](../../simpleicons-8/P/Pivotaltracker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PivotaltrackerXs>`
- `<$PivotaltrackerSm>`
- `<$PivotaltrackerMd>`
- `<$PivotaltrackerLg>`





## Pivotaltracker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pivotaltracker
include('simpleicons-8/P/Pivotaltracker')

' renders the element
Pivotaltracker('Pivotaltracker', 'Pivotaltracker', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pivotaltracker
include('simpleicons-8/P/Pivotaltracker')

' renders the element
Pivotaltracker('Pivotaltracker', 'Pivotaltracker', 'an optional tech label', 'an optional description')
@enduml
```

