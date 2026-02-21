# Monument


```text
fontawesome/Solid/Monument
```

```text
include('fontawesome/Solid/Monument')
```



| Illustration | Monument |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Monument.png) | ![illustration for Monument](../../fontawesome/Solid/Monument.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonumentXs>`
- `<$MonumentSm>`
- `<$MonumentMd>`
- `<$MonumentLg>`





## Monument

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Monument
include('fontawesome/Solid/Monument')

' renders the element
Monument('Monument', 'Monument', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monument
include('fontawesome/Solid/Monument')

' renders the element
Monument('Monument', 'Monument', 'an optional tech label', 'an optional description')
@enduml
```

