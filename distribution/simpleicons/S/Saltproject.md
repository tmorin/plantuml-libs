# Saltproject


```text
simpleicons/S/Saltproject
```

```text
include('simpleicons/S/Saltproject')
```



| Illustration | Saltproject |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Saltproject.png) | ![illustration for Saltproject](../../simpleicons/S/Saltproject.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SaltprojectXs>`
- `<$SaltprojectSm>`
- `<$SaltprojectMd>`
- `<$SaltprojectLg>`





## Saltproject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Saltproject
include('simpleicons/S/Saltproject')

' renders the element
Saltproject('Saltproject', 'Saltproject', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Saltproject
include('simpleicons/S/Saltproject')

' renders the element
Saltproject('Saltproject', 'Saltproject', 'an optional tech label', 'an optional description')
@enduml
```

