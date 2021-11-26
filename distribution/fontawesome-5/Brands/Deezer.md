# Deezer


```text
fontawesome-5/Brands/Deezer
```

```text
include('fontawesome-5/Brands/Deezer')
```



| Illustration | Deezer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Deezer.png) | ![illustration for Deezer](../../fontawesome-5/Brands/Deezer.Local.png) |




## Deezer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Deezer
include('fontawesome-5/Brands/Deezer')

' renders the element
Deezer('Deezer', 'Deezer', 'an optional tech label')
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

' loads the Item which embeds the element Deezer
include('fontawesome-5/Brands/Deezer')

' renders the element
Deezer('Deezer', 'Deezer', 'an optional tech label')
@enduml
```

