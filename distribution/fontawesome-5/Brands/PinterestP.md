# PinterestP


```text
fontawesome-5/Brands/PinterestP
```

```text
include('fontawesome-5/Brands/PinterestP')
```



| Illustration | PinterestP |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/PinterestP.png) | ![illustration for PinterestP](../../fontawesome-5/Brands/PinterestP.Local.png) |




## PinterestP

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PinterestP
include('fontawesome-5/Brands/PinterestP')

' renders the element
PinterestP('PinterestP', 'Pinterest P', 'an optional tech label')
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

' loads the Item which embeds the element PinterestP
include('fontawesome-5/Brands/PinterestP')

' renders the element
PinterestP('PinterestP', 'Pinterest P', 'an optional tech label')
@enduml
```

