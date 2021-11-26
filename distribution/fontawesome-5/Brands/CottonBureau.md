# CottonBureau


```text
fontawesome-5/Brands/CottonBureau
```

```text
include('fontawesome-5/Brands/CottonBureau')
```



| Illustration | CottonBureau |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CottonBureau.png) | ![illustration for CottonBureau](../../fontawesome-5/Brands/CottonBureau.Local.png) |




## CottonBureau

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CottonBureau
include('fontawesome-5/Brands/CottonBureau')

' renders the element
CottonBureau('CottonBureau', 'Cotton Bureau', 'an optional tech label')
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

' loads the Item which embeds the element CottonBureau
include('fontawesome-5/Brands/CottonBureau')

' renders the element
CottonBureau('CottonBureau', 'Cotton Bureau', 'an optional tech label')
@enduml
```

