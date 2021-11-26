# BlackTie


```text
fontawesome-5/Brands/BlackTie
```

```text
include('fontawesome-5/Brands/BlackTie')
```



| Illustration | BlackTie |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/BlackTie.png) | ![illustration for BlackTie](../../fontawesome-5/Brands/BlackTie.Local.png) |




## BlackTie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BlackTie
include('fontawesome-5/Brands/BlackTie')

' renders the element
BlackTie('BlackTie', 'Black Tie', 'an optional tech label')
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

' loads the Item which embeds the element BlackTie
include('fontawesome-5/Brands/BlackTie')

' renders the element
BlackTie('BlackTie', 'Black Tie', 'an optional tech label')
@enduml
```

