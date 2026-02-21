# Cmplid


```text
fontawesome/Brands/Cmplid
```

```text
include('fontawesome/Brands/Cmplid')
```



| Illustration | Cmplid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Cmplid.png) | ![illustration for Cmplid](../../fontawesome/Brands/Cmplid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CmplidXs>`
- `<$CmplidSm>`
- `<$CmplidMd>`
- `<$CmplidLg>`





## Cmplid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cmplid
include('fontawesome/Brands/Cmplid')

' renders the element
Cmplid('Cmplid', 'Cmplid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cmplid
include('fontawesome/Brands/Cmplid')

' renders the element
Cmplid('Cmplid', 'Cmplid', 'an optional tech label', 'an optional description')
@enduml
```

