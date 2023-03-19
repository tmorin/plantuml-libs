# LocalPolice


```text
material-4/Maps/LocalPolice
```

```text
include('material-4/Maps/LocalPolice')
```



| Illustration | LocalPolice |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalPolice.png) | ![illustration for LocalPolice](../../material-4/Maps/LocalPolice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalPoliceXs>`
- `<$LocalPoliceSm>`
- `<$LocalPoliceMd>`
- `<$LocalPoliceLg>`





## LocalPolice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalPolice
include('material-4/Maps/LocalPolice')

' renders the element
LocalPolice('LocalPolice', 'Local Police', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalPolice
include('material-4/Maps/LocalPolice')

' renders the element
LocalPolice('LocalPolice', 'Local Police', 'an optional tech label', 'an optional description')
@enduml
```

