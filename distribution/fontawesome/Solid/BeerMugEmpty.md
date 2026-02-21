# BeerMugEmpty


```text
fontawesome/Solid/BeerMugEmpty
```

```text
include('fontawesome/Solid/BeerMugEmpty')
```



| Illustration | BeerMugEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BeerMugEmpty.png) | ![illustration for BeerMugEmpty](../../fontawesome/Solid/BeerMugEmpty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeerMugEmptyXs>`
- `<$BeerMugEmptySm>`
- `<$BeerMugEmptyMd>`
- `<$BeerMugEmptyLg>`





## BeerMugEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BeerMugEmpty
include('fontawesome/Solid/BeerMugEmpty')

' renders the element
BeerMugEmpty('BeerMugEmpty', 'Beer Mug Empty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BeerMugEmpty
include('fontawesome/Solid/BeerMugEmpty')

' renders the element
BeerMugEmpty('BeerMugEmpty', 'Beer Mug Empty', 'an optional tech label', 'an optional description')
@enduml
```

