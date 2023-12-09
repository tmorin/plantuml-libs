# Mintbit


```text
fontawesome-6/Brands/Mintbit
```

```text
include('fontawesome-6/Brands/Mintbit')
```



| Illustration | Mintbit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Mintbit.png) | ![illustration for Mintbit](../../fontawesome-6/Brands/Mintbit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MintbitXs>`
- `<$MintbitSm>`
- `<$MintbitMd>`
- `<$MintbitLg>`





## Mintbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mintbit
include('fontawesome-6/Brands/Mintbit')

' renders the element
Mintbit('Mintbit', 'Mintbit', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mintbit
include('fontawesome-6/Brands/Mintbit')

' renders the element
Mintbit('Mintbit', 'Mintbit', 'an optional tech label', 'an optional description')
@enduml
```

