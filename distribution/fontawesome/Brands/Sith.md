# Sith


```text
fontawesome/Brands/Sith
```

```text
include('fontawesome/Brands/Sith')
```



| Illustration | Sith |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Sith.png) | ![illustration for Sith](../../fontawesome/Brands/Sith.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SithXs>`
- `<$SithSm>`
- `<$SithMd>`
- `<$SithLg>`





## Sith

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sith
include('fontawesome/Brands/Sith')

' renders the element
Sith('Sith', 'Sith', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sith
include('fontawesome/Brands/Sith')

' renders the element
Sith('Sith', 'Sith', 'an optional tech label', 'an optional description')
@enduml
```

