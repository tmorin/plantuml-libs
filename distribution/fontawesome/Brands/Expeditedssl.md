# Expeditedssl


```text
fontawesome/Brands/Expeditedssl
```

```text
include('fontawesome/Brands/Expeditedssl')
```



| Illustration | Expeditedssl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Expeditedssl.png) | ![illustration for Expeditedssl](../../fontawesome/Brands/Expeditedssl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExpeditedsslXs>`
- `<$ExpeditedsslSm>`
- `<$ExpeditedsslMd>`
- `<$ExpeditedsslLg>`





## Expeditedssl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Expeditedssl
include('fontawesome/Brands/Expeditedssl')

' renders the element
Expeditedssl('Expeditedssl', 'Expeditedssl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Expeditedssl
include('fontawesome/Brands/Expeditedssl')

' renders the element
Expeditedssl('Expeditedssl', 'Expeditedssl', 'an optional tech label', 'an optional description')
@enduml
```

