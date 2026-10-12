# Xrpl


```text
fontawesome/Brands/Xrpl
```

```text
include('fontawesome/Brands/Xrpl')
```



| Illustration | Xrpl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Xrpl.png) | ![illustration for Xrpl](../../fontawesome/Brands/Xrpl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XrplXs>`
- `<$XrplSm>`
- `<$XrplMd>`
- `<$XrplLg>`





## Xrpl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Xrpl
include('fontawesome/Brands/Xrpl')

' renders the element
Xrpl('Xrpl', 'Xrpl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xrpl
include('fontawesome/Brands/Xrpl')

' renders the element
Xrpl('Xrpl', 'Xrpl', 'an optional tech label', 'an optional description')
@enduml
```

