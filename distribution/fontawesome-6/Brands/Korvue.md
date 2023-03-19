# Korvue


```text
fontawesome-6/Brands/Korvue
```

```text
include('fontawesome-6/Brands/Korvue')
```



| Illustration | Korvue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Korvue.png) | ![illustration for Korvue](../../fontawesome-6/Brands/Korvue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KorvueXs>`
- `<$KorvueSm>`
- `<$KorvueMd>`
- `<$KorvueLg>`





## Korvue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Korvue
include('fontawesome-6/Brands/Korvue')

' renders the element
Korvue('Korvue', 'Korvue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Korvue
include('fontawesome-6/Brands/Korvue')

' renders the element
Korvue('Korvue', 'Korvue', 'an optional tech label', 'an optional description')
@enduml
```

