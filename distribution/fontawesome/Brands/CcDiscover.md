# CcDiscover


```text
fontawesome/Brands/CcDiscover
```

```text
include('fontawesome/Brands/CcDiscover')
```



| Illustration | CcDiscover |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CcDiscover.png) | ![illustration for CcDiscover](../../fontawesome/Brands/CcDiscover.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CcDiscoverXs>`
- `<$CcDiscoverSm>`
- `<$CcDiscoverMd>`
- `<$CcDiscoverLg>`





## CcDiscover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CcDiscover
include('fontawesome/Brands/CcDiscover')

' renders the element
CcDiscover('CcDiscover', 'Cc Discover', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CcDiscover
include('fontawesome/Brands/CcDiscover')

' renders the element
CcDiscover('CcDiscover', 'Cc Discover', 'an optional tech label', 'an optional description')
@enduml
```

