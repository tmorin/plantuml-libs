# Yelp


```text
fontawesome-5/Brands/Yelp
```

```text
include('fontawesome-5/Brands/Yelp')
```



| Illustration | Yelp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Yelp.png) | ![illustration for Yelp](../../fontawesome-5/Brands/Yelp.Local.png) |




## Yelp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Yelp
include('fontawesome-5/Brands/Yelp')

' renders the element
Yelp('Yelp', 'Yelp', 'an optional tech label')
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

' loads the Item which embeds the element Yelp
include('fontawesome-5/Brands/Yelp')

' renders the element
Yelp('Yelp', 'Yelp', 'an optional tech label')
@enduml
```

