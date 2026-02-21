# Palfed


```text
fontawesome/Brands/Palfed
```

```text
include('fontawesome/Brands/Palfed')
```



| Illustration | Palfed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Palfed.png) | ![illustration for Palfed](../../fontawesome/Brands/Palfed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PalfedXs>`
- `<$PalfedSm>`
- `<$PalfedMd>`
- `<$PalfedLg>`





## Palfed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Palfed
include('fontawesome/Brands/Palfed')

' renders the element
Palfed('Palfed', 'Palfed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Palfed
include('fontawesome/Brands/Palfed')

' renders the element
Palfed('Palfed', 'Palfed', 'an optional tech label', 'an optional description')
@enduml
```

