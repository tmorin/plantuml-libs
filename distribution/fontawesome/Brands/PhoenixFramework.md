# PhoenixFramework


```text
fontawesome/Brands/PhoenixFramework
```

```text
include('fontawesome/Brands/PhoenixFramework')
```



| Illustration | PhoenixFramework |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/PhoenixFramework.png) | ![illustration for PhoenixFramework](../../fontawesome/Brands/PhoenixFramework.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoenixFrameworkXs>`
- `<$PhoenixFrameworkSm>`
- `<$PhoenixFrameworkMd>`
- `<$PhoenixFrameworkLg>`





## PhoenixFramework

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PhoenixFramework
include('fontawesome/Brands/PhoenixFramework')

' renders the element
PhoenixFramework('PhoenixFramework', 'Phoenix Framework', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoenixFramework
include('fontawesome/Brands/PhoenixFramework')

' renders the element
PhoenixFramework('PhoenixFramework', 'Phoenix Framework', 'an optional tech label', 'an optional description')
@enduml
```

