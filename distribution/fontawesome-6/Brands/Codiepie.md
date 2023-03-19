# Codiepie


```text
fontawesome-6/Brands/Codiepie
```

```text
include('fontawesome-6/Brands/Codiepie')
```



| Illustration | Codiepie |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Codiepie.png) | ![illustration for Codiepie](../../fontawesome-6/Brands/Codiepie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodiepieXs>`
- `<$CodiepieSm>`
- `<$CodiepieMd>`
- `<$CodiepieLg>`





## Codiepie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Codiepie
include('fontawesome-6/Brands/Codiepie')

' renders the element
Codiepie('Codiepie', 'Codiepie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codiepie
include('fontawesome-6/Brands/Codiepie')

' renders the element
Codiepie('Codiepie', 'Codiepie', 'an optional tech label', 'an optional description')
@enduml
```

