# Servicestack


```text
fontawesome/Brands/Servicestack
```

```text
include('fontawesome/Brands/Servicestack')
```



| Illustration | Servicestack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Servicestack.png) | ![illustration for Servicestack](../../fontawesome/Brands/Servicestack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServicestackXs>`
- `<$ServicestackSm>`
- `<$ServicestackMd>`
- `<$ServicestackLg>`





## Servicestack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Servicestack
include('fontawesome/Brands/Servicestack')

' renders the element
Servicestack('Servicestack', 'Servicestack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Servicestack
include('fontawesome/Brands/Servicestack')

' renders the element
Servicestack('Servicestack', 'Servicestack', 'an optional tech label', 'an optional description')
@enduml
```

