# LocalActivity


```text
material/Maps/LocalActivity
```

```text
include('material/Maps/LocalActivity')
```



| Illustration | LocalActivity |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalActivity.png) | ![illustration for LocalActivity](../../material/Maps/LocalActivity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalActivityXs>`
- `<$LocalActivitySm>`
- `<$LocalActivityMd>`
- `<$LocalActivityLg>`





## LocalActivity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalActivity
include('material/Maps/LocalActivity')

' renders the element
LocalActivity('LocalActivity', 'Local Activity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalActivity
include('material/Maps/LocalActivity')

' renders the element
LocalActivity('LocalActivity', 'Local Activity', 'an optional tech label', 'an optional description')
@enduml
```

