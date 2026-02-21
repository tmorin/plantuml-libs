# Pagelines


```text
fontawesome/Brands/Pagelines
```

```text
include('fontawesome/Brands/Pagelines')
```



| Illustration | Pagelines |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Pagelines.png) | ![illustration for Pagelines](../../fontawesome/Brands/Pagelines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PagelinesXs>`
- `<$PagelinesSm>`
- `<$PagelinesMd>`
- `<$PagelinesLg>`





## Pagelines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pagelines
include('fontawesome/Brands/Pagelines')

' renders the element
Pagelines('Pagelines', 'Pagelines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pagelines
include('fontawesome/Brands/Pagelines')

' renders the element
Pagelines('Pagelines', 'Pagelines', 'an optional tech label', 'an optional description')
@enduml
```

