# Ravelry


```text
fontawesome/Brands/Ravelry
```

```text
include('fontawesome/Brands/Ravelry')
```



| Illustration | Ravelry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ravelry.png) | ![illustration for Ravelry](../../fontawesome/Brands/Ravelry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RavelryXs>`
- `<$RavelrySm>`
- `<$RavelryMd>`
- `<$RavelryLg>`





## Ravelry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ravelry
include('fontawesome/Brands/Ravelry')

' renders the element
Ravelry('Ravelry', 'Ravelry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ravelry
include('fontawesome/Brands/Ravelry')

' renders the element
Ravelry('Ravelry', 'Ravelry', 'an optional tech label', 'an optional description')
@enduml
```

