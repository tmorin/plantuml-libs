# Buysellads


```text
fontawesome-5/Brands/Buysellads
```

```text
include('fontawesome-5/Brands/Buysellads')
```



| Illustration | Buysellads |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Buysellads.png) | ![illustration for Buysellads](../../fontawesome-5/Brands/Buysellads.Local.png) |




## Buysellads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Buysellads
include('fontawesome-5/Brands/Buysellads')

' renders the element
Buysellads('Buysellads', 'Buysellads', 'an optional tech label')
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

' loads the Item which embeds the element Buysellads
include('fontawesome-5/Brands/Buysellads')

' renders the element
Buysellads('Buysellads', 'Buysellads', 'an optional tech label')
@enduml
```

