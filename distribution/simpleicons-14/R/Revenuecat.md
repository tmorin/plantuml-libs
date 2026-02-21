# Revenuecat


```text
simpleicons-14/R/Revenuecat
```

```text
include('simpleicons-14/R/Revenuecat')
```



| Illustration | Revenuecat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Revenuecat.png) | ![illustration for Revenuecat](../../simpleicons-14/R/Revenuecat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RevenuecatXs>`
- `<$RevenuecatSm>`
- `<$RevenuecatMd>`
- `<$RevenuecatLg>`





## Revenuecat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Revenuecat
include('simpleicons-14/R/Revenuecat')

' renders the element
Revenuecat('Revenuecat', 'Revenuecat', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Revenuecat
include('simpleicons-14/R/Revenuecat')

' renders the element
Revenuecat('Revenuecat', 'Revenuecat', 'an optional tech label', 'an optional description')
@enduml
```

