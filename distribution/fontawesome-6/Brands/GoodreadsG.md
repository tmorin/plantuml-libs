# GoodreadsG


```text
fontawesome-6/Brands/GoodreadsG
```

```text
include('fontawesome-6/Brands/GoodreadsG')
```



| Illustration | GoodreadsG |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GoodreadsG.png) | ![illustration for GoodreadsG](../../fontawesome-6/Brands/GoodreadsG.Local.png) |




## GoodreadsG

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GoodreadsG
include('fontawesome-6/Brands/GoodreadsG')

' renders the element
GoodreadsG('GoodreadsG', 'Goodreads G', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GoodreadsG
include('fontawesome-6/Brands/GoodreadsG')

' renders the element
GoodreadsG('GoodreadsG', 'Goodreads G', 'an optional tech label', 'an optional description')
@enduml
```

