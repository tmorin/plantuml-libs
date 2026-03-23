# SearchMinus


```text
fontawesome/Solid/SearchMinus
```

```text
include('fontawesome/Solid/SearchMinus')
```



| Illustration | SearchMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SearchMinus.png) | ![illustration for SearchMinus](../../fontawesome/Solid/SearchMinus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SearchMinusXs>`
- `<$SearchMinusSm>`
- `<$SearchMinusMd>`
- `<$SearchMinusLg>`





## SearchMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SearchMinus
include('fontawesome/Solid/SearchMinus')

' renders the element
SearchMinus('SearchMinus', 'Search Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SearchMinus
include('fontawesome/Solid/SearchMinus')

' renders the element
SearchMinus('SearchMinus', 'Search Minus', 'an optional tech label', 'an optional description')
@enduml
```

