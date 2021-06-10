# GoodreadsG


```text
fontawesome-5/Brands/GoodreadsG
```

```text
include('fontawesome-5/Brands/GoodreadsG')
```



| Illustration | GoodreadsG |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/GoodreadsG.png) | ![illustration for GoodreadsG](../../fontawesome-5/Brands/GoodreadsG.Local.png) |




## GoodreadsG

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GoodreadsG
include('fontawesome-5/Brands/GoodreadsG')

' renders the element
GoodreadsG('GoodreadsG', 'Goodreads G', 'an optional tech label')
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

' loads the Item which embeds the element GoodreadsG
include('fontawesome-5/Brands/GoodreadsG')

' renders the element
GoodreadsG('GoodreadsG', 'Goodreads G', 'an optional tech label')
@enduml
```

