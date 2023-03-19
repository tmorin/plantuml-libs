# Wirsindhandwerk


```text
fontawesome-6/Brands/Wirsindhandwerk
```

```text
include('fontawesome-6/Brands/Wirsindhandwerk')
```



| Illustration | Wirsindhandwerk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Wirsindhandwerk.png) | ![illustration for Wirsindhandwerk](../../fontawesome-6/Brands/Wirsindhandwerk.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Wirsindhandwerk
include('fontawesome-6/Brands/Wirsindhandwerk')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Wirsindhandwerk
include('fontawesome-6/Brands/Wirsindhandwerk')

' renders the element
Wirsindhandwerk('Wirsindhandwerk', 'Wirsindhandwerk', 'an optional tech label', 'an optional description')
@enduml
```

