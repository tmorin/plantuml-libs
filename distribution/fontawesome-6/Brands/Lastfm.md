# Lastfm


```text
fontawesome-6/Brands/Lastfm
```

```text
include('fontawesome-6/Brands/Lastfm')
```



| Illustration | Lastfm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Lastfm.png) | ![illustration for Lastfm](../../fontawesome-6/Brands/Lastfm.Local.png) |




## Lastfm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Lastfm
include('fontawesome-6/Brands/Lastfm')

' renders the element
Lastfm('Lastfm', 'Lastfm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lastfm
include('fontawesome-6/Brands/Lastfm')

' renders the element
Lastfm('Lastfm', 'Lastfm', 'an optional tech label', 'an optional description')
@enduml
```

