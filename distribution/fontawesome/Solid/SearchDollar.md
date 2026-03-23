# SearchDollar


```text
fontawesome/Solid/SearchDollar
```

```text
include('fontawesome/Solid/SearchDollar')
```



| Illustration | SearchDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SearchDollar.png) | ![illustration for SearchDollar](../../fontawesome/Solid/SearchDollar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SearchDollarXs>`
- `<$SearchDollarSm>`
- `<$SearchDollarMd>`
- `<$SearchDollarLg>`





## SearchDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SearchDollar
include('fontawesome/Solid/SearchDollar')

' renders the element
SearchDollar('SearchDollar', 'Search Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SearchDollar
include('fontawesome/Solid/SearchDollar')

' renders the element
SearchDollar('SearchDollar', 'Search Dollar', 'an optional tech label', 'an optional description')
@enduml
```

