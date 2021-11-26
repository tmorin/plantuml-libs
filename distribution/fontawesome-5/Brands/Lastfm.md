# Lastfm


```text
fontawesome-5/Brands/Lastfm
```

```text
include('fontawesome-5/Brands/Lastfm')
```



| Illustration | Lastfm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Lastfm.png) | ![illustration for Lastfm](../../fontawesome-5/Brands/Lastfm.Local.png) |




## Lastfm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Lastfm
include('fontawesome-5/Brands/Lastfm')

' renders the element
Lastfm('Lastfm', 'Lastfm', 'an optional tech label')
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

' loads the Item which embeds the element Lastfm
include('fontawesome-5/Brands/Lastfm')

' renders the element
Lastfm('Lastfm', 'Lastfm', 'an optional tech label')
@enduml
```

