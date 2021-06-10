# ProductHunt


```text
fontawesome-5/Brands/ProductHunt
```

```text
include('fontawesome-5/Brands/ProductHunt')
```



| Illustration | ProductHunt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/ProductHunt.png) | ![illustration for ProductHunt](../../fontawesome-5/Brands/ProductHunt.Local.png) |




## ProductHunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ProductHunt
include('fontawesome-5/Brands/ProductHunt')

' renders the element
ProductHunt('ProductHunt', 'Product Hunt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ProductHunt
include('fontawesome-5/Brands/ProductHunt')

' renders the element
ProductHunt('ProductHunt', 'Product Hunt', 'an optional tech label')
@enduml
```

