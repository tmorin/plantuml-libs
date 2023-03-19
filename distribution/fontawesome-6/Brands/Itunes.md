# Itunes


```text
fontawesome-6/Brands/Itunes
```

```text
include('fontawesome-6/Brands/Itunes')
```



| Illustration | Itunes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Itunes.png) | ![illustration for Itunes](../../fontawesome-6/Brands/Itunes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ItunesXs>`
- `<$ItunesSm>`
- `<$ItunesMd>`
- `<$ItunesLg>`





## Itunes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Itunes
include('fontawesome-6/Brands/Itunes')

' renders the element
Itunes('Itunes', 'Itunes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Itunes
include('fontawesome-6/Brands/Itunes')

' renders the element
Itunes('Itunes', 'Itunes', 'an optional tech label', 'an optional description')
@enduml
```

