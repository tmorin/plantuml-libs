# GoogleScholar


```text
fontawesome/Brands/GoogleScholar
```

```text
include('fontawesome/Brands/GoogleScholar')
```



| Illustration | GoogleScholar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GoogleScholar.png) | ![illustration for GoogleScholar](../../fontawesome/Brands/GoogleScholar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleScholarXs>`
- `<$GoogleScholarSm>`
- `<$GoogleScholarMd>`
- `<$GoogleScholarLg>`





## GoogleScholar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GoogleScholar
include('fontawesome/Brands/GoogleScholar')

' renders the element
GoogleScholar('GoogleScholar', 'Google Scholar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GoogleScholar
include('fontawesome/Brands/GoogleScholar')

' renders the element
GoogleScholar('GoogleScholar', 'Google Scholar', 'an optional tech label', 'an optional description')
@enduml
```

