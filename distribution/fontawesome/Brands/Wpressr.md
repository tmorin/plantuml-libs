# Wpressr


```text
fontawesome/Brands/Wpressr
```

```text
include('fontawesome/Brands/Wpressr')
```



| Illustration | Wpressr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Wpressr.png) | ![illustration for Wpressr](../../fontawesome/Brands/Wpressr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WpressrXs>`
- `<$WpressrSm>`
- `<$WpressrMd>`
- `<$WpressrLg>`





## Wpressr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wpressr
include('fontawesome/Brands/Wpressr')

' renders the element
Wpressr('Wpressr', 'Wpressr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wpressr
include('fontawesome/Brands/Wpressr')

' renders the element
Wpressr('Wpressr', 'Wpressr', 'an optional tech label', 'an optional description')
@enduml
```

