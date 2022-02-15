# ShopSlash


```text
fontawesome-6/Solid/ShopSlash
```

```text
include('fontawesome-6/Solid/ShopSlash')
```



| Illustration | ShopSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ShopSlash.png) | ![illustration for ShopSlash](../../fontawesome-6/Solid/ShopSlash.Local.png) |




## ShopSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShopSlash
include('fontawesome-6/Solid/ShopSlash')

' renders the element
ShopSlash('ShopSlash', 'Shop Slash', 'an optional tech label')
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

' loads the Item which embeds the element ShopSlash
include('fontawesome-6/Solid/ShopSlash')

' renders the element
ShopSlash('ShopSlash', 'Shop Slash', 'an optional tech label')
@enduml
```

