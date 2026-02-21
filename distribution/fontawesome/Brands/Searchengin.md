# Searchengin


```text
fontawesome/Brands/Searchengin
```

```text
include('fontawesome/Brands/Searchengin')
```



| Illustration | Searchengin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Searchengin.png) | ![illustration for Searchengin](../../fontawesome/Brands/Searchengin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SearchenginXs>`
- `<$SearchenginSm>`
- `<$SearchenginMd>`
- `<$SearchenginLg>`





## Searchengin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Searchengin
include('fontawesome/Brands/Searchengin')

' renders the element
Searchengin('Searchengin', 'Searchengin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Searchengin
include('fontawesome/Brands/Searchengin')

' renders the element
Searchengin('Searchengin', 'Searchengin', 'an optional tech label', 'an optional description')
@enduml
```

