# BlackTie


```text
fontawesome/Brands/BlackTie
```

```text
include('fontawesome/Brands/BlackTie')
```



| Illustration | BlackTie |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/BlackTie.png) | ![illustration for BlackTie](../../fontawesome/Brands/BlackTie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlackTieXs>`
- `<$BlackTieSm>`
- `<$BlackTieMd>`
- `<$BlackTieLg>`





## BlackTie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BlackTie
include('fontawesome/Brands/BlackTie')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BlackTie
include('fontawesome/Brands/BlackTie')

' renders the element
BlackTie('BlackTie', 'Black Tie', 'an optional tech label', 'an optional description')
@enduml
```

