# ProductHunt


```text
fontawesome/Brands/ProductHunt
```

```text
include('fontawesome/Brands/ProductHunt')
```



| Illustration | ProductHunt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/ProductHunt.png) | ![illustration for ProductHunt](../../fontawesome/Brands/ProductHunt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProductHuntXs>`
- `<$ProductHuntSm>`
- `<$ProductHuntMd>`
- `<$ProductHuntLg>`





## ProductHunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ProductHunt
include('fontawesome/Brands/ProductHunt')

' renders the element
ProductHunt('ProductHunt', 'Product Hunt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ProductHunt
include('fontawesome/Brands/ProductHunt')

' renders the element
ProductHunt('ProductHunt', 'Product Hunt', 'an optional tech label', 'an optional description')
@enduml
```

