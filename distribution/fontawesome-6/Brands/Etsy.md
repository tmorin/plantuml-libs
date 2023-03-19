# Etsy


```text
fontawesome-6/Brands/Etsy
```

```text
include('fontawesome-6/Brands/Etsy')
```



| Illustration | Etsy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Etsy.png) | ![illustration for Etsy](../../fontawesome-6/Brands/Etsy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EtsyXs>`
- `<$EtsySm>`
- `<$EtsyMd>`
- `<$EtsyLg>`





## Etsy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Etsy
include('fontawesome-6/Brands/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Etsy
include('fontawesome-6/Brands/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label', 'an optional description')
@enduml
```

