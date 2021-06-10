# GooglePlusSquare


```text
fontawesome-5/Brands/GooglePlusSquare
```

```text
include('fontawesome-5/Brands/GooglePlusSquare')
```



| Illustration | GooglePlusSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/GooglePlusSquare.png) | ![illustration for GooglePlusSquare](../../fontawesome-5/Brands/GooglePlusSquare.Local.png) |




## GooglePlusSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GooglePlusSquare
include('fontawesome-5/Brands/GooglePlusSquare')

' renders the element
GooglePlusSquare('GooglePlusSquare', 'Google Plus Square', 'an optional tech label')
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

' loads the Item which embeds the element GooglePlusSquare
include('fontawesome-5/Brands/GooglePlusSquare')

' renders the element
GooglePlusSquare('GooglePlusSquare', 'Google Plus Square', 'an optional tech label')
@enduml
```

