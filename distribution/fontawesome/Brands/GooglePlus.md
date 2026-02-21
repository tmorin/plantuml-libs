# GooglePlus


```text
fontawesome/Brands/GooglePlus
```

```text
include('fontawesome/Brands/GooglePlus')
```



| Illustration | GooglePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GooglePlus.png) | ![illustration for GooglePlus](../../fontawesome/Brands/GooglePlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglePlusXs>`
- `<$GooglePlusSm>`
- `<$GooglePlusMd>`
- `<$GooglePlusLg>`





## GooglePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GooglePlus
include('fontawesome/Brands/GooglePlus')

' renders the element
GooglePlus('GooglePlus', 'Google Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GooglePlus
include('fontawesome/Brands/GooglePlus')

' renders the element
GooglePlus('GooglePlus', 'Google Plus', 'an optional tech label', 'an optional description')
@enduml
```

