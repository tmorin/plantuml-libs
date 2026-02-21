# LocalSee


```text
material/Maps/LocalSee
```

```text
include('material/Maps/LocalSee')
```



| Illustration | LocalSee |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalSee.png) | ![illustration for LocalSee](../../material/Maps/LocalSee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalSeeXs>`
- `<$LocalSeeSm>`
- `<$LocalSeeMd>`
- `<$LocalSeeLg>`





## LocalSee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalSee
include('material/Maps/LocalSee')

' renders the element
LocalSee('LocalSee', 'Local See', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalSee
include('material/Maps/LocalSee')

' renders the element
LocalSee('LocalSee', 'Local See', 'an optional tech label', 'an optional description')
@enduml
```

