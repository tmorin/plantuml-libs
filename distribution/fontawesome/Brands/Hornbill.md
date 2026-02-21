# Hornbill


```text
fontawesome/Brands/Hornbill
```

```text
include('fontawesome/Brands/Hornbill')
```



| Illustration | Hornbill |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Hornbill.png) | ![illustration for Hornbill](../../fontawesome/Brands/Hornbill.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HornbillXs>`
- `<$HornbillSm>`
- `<$HornbillMd>`
- `<$HornbillLg>`





## Hornbill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hornbill
include('fontawesome/Brands/Hornbill')

' renders the element
Hornbill('Hornbill', 'Hornbill', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hornbill
include('fontawesome/Brands/Hornbill')

' renders the element
Hornbill('Hornbill', 'Hornbill', 'an optional tech label', 'an optional description')
@enduml
```

