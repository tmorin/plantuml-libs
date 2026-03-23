# SearchPlus


```text
fontawesome/Solid/SearchPlus
```

```text
include('fontawesome/Solid/SearchPlus')
```



| Illustration | SearchPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SearchPlus.png) | ![illustration for SearchPlus](../../fontawesome/Solid/SearchPlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SearchPlusXs>`
- `<$SearchPlusSm>`
- `<$SearchPlusMd>`
- `<$SearchPlusLg>`





## SearchPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SearchPlus
include('fontawesome/Solid/SearchPlus')

' renders the element
SearchPlus('SearchPlus', 'Search Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SearchPlus
include('fontawesome/Solid/SearchPlus')

' renders the element
SearchPlus('SearchPlus', 'Search Plus', 'an optional tech label', 'an optional description')
@enduml
```

