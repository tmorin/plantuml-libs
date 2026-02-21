# Perbyte


```text
fontawesome/Brands/Perbyte
```

```text
include('fontawesome/Brands/Perbyte')
```



| Illustration | Perbyte |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Perbyte.png) | ![illustration for Perbyte](../../fontawesome/Brands/Perbyte.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PerbyteXs>`
- `<$PerbyteSm>`
- `<$PerbyteMd>`
- `<$PerbyteLg>`





## Perbyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Perbyte
include('fontawesome/Brands/Perbyte')

' renders the element
Perbyte('Perbyte', 'Perbyte', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Perbyte
include('fontawesome/Brands/Perbyte')

' renders the element
Perbyte('Perbyte', 'Perbyte', 'an optional tech label', 'an optional description')
@enduml
```

