# Uikit


```text
fontawesome-6/Brands/Uikit
```

```text
include('fontawesome-6/Brands/Uikit')
```



| Illustration | Uikit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Uikit.png) | ![illustration for Uikit](../../fontawesome-6/Brands/Uikit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UikitXs>`
- `<$UikitSm>`
- `<$UikitMd>`
- `<$UikitLg>`





## Uikit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Uikit
include('fontawesome-6/Brands/Uikit')

' renders the element
Uikit('Uikit', 'Uikit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uikit
include('fontawesome-6/Brands/Uikit')

' renders the element
Uikit('Uikit', 'Uikit', 'an optional tech label', 'an optional description')
@enduml
```

