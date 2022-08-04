# BlackTie


```text
fontawesome-6/Brands/BlackTie
```

```text
include('fontawesome-6/Brands/BlackTie')
```



| Illustration | BlackTie |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/BlackTie.png) | ![illustration for BlackTie](../../fontawesome-6/Brands/BlackTie.Local.png) |




## BlackTie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BlackTie
include('fontawesome-6/Brands/BlackTie')

' renders the element
BlackTie('BlackTie', 'Black Tie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BlackTie
include('fontawesome-6/Brands/BlackTie')

' renders the element
BlackTie('BlackTie', 'Black Tie', 'an optional tech label', 'an optional description')
@enduml
```

