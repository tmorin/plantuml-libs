# Wirsindhandwerk


```text
fontawesome/Brands/Wirsindhandwerk
```

```text
include('fontawesome/Brands/Wirsindhandwerk')
```



| Illustration | Wirsindhandwerk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Wirsindhandwerk.png) | ![illustration for Wirsindhandwerk](../../fontawesome/Brands/Wirsindhandwerk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WirsindhandwerkXs>`
- `<$WirsindhandwerkSm>`
- `<$WirsindhandwerkMd>`
- `<$WirsindhandwerkLg>`





## Wirsindhandwerk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wirsindhandwerk
include('fontawesome/Brands/Wirsindhandwerk')

' renders the element
Wirsindhandwerk('Wirsindhandwerk', 'Wirsindhandwerk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wirsindhandwerk
include('fontawesome/Brands/Wirsindhandwerk')

' renders the element
Wirsindhandwerk('Wirsindhandwerk', 'Wirsindhandwerk', 'an optional tech label', 'an optional description')
@enduml
```

