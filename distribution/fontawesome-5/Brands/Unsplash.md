# Unsplash


```text
fontawesome-5/Brands/Unsplash
```

```text
include('fontawesome-5/Brands/Unsplash')
```



| Illustration | Unsplash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Unsplash.png) | ![illustration for Unsplash](../../fontawesome-5/Brands/Unsplash.Local.png) |




## Unsplash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Unsplash
include('fontawesome-5/Brands/Unsplash')

' renders the element
Unsplash('Unsplash', 'Unsplash', 'an optional tech label')
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

' loads the Item which embeds the element Unsplash
include('fontawesome-5/Brands/Unsplash')

' renders the element
Unsplash('Unsplash', 'Unsplash', 'an optional tech label')
@enduml
```

