# LocalFlorist


```text
material/Maps/LocalFlorist
```

```text
include('material/Maps/LocalFlorist')
```



| Illustration | LocalFlorist |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalFlorist.png) | ![illustration for LocalFlorist](../../material/Maps/LocalFlorist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalFloristXs>`
- `<$LocalFloristSm>`
- `<$LocalFloristMd>`
- `<$LocalFloristLg>`





## LocalFlorist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalFlorist
include('material/Maps/LocalFlorist')

' renders the element
LocalFlorist('LocalFlorist', 'Local Florist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalFlorist
include('material/Maps/LocalFlorist')

' renders the element
LocalFlorist('LocalFlorist', 'Local Florist', 'an optional tech label', 'an optional description')
@enduml
```

