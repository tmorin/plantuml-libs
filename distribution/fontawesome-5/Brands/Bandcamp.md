# Bandcamp


```text
fontawesome-5/Brands/Bandcamp
```

```text
include('fontawesome-5/Brands/Bandcamp')
```



| Illustration | Bandcamp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Bandcamp.png) | ![illustration for Bandcamp](../../fontawesome-5/Brands/Bandcamp.Local.png) |




## Bandcamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bandcamp
include('fontawesome-5/Brands/Bandcamp')

' renders the element
Bandcamp('Bandcamp', 'Bandcamp', 'an optional tech label')
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

' loads the Item which embeds the element Bandcamp
include('fontawesome-5/Brands/Bandcamp')

' renders the element
Bandcamp('Bandcamp', 'Bandcamp', 'an optional tech label')
@enduml
```

