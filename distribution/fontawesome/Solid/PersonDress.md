# PersonDress


```text
fontawesome/Solid/PersonDress
```

```text
include('fontawesome/Solid/PersonDress')
```



| Illustration | PersonDress |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonDress.png) | ![illustration for PersonDress](../../fontawesome/Solid/PersonDress.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonDressXs>`
- `<$PersonDressSm>`
- `<$PersonDressMd>`
- `<$PersonDressLg>`





## PersonDress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonDress
include('fontawesome/Solid/PersonDress')

' renders the element
PersonDress('PersonDress', 'Person Dress', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonDress
include('fontawesome/Solid/PersonDress')

' renders the element
PersonDress('PersonDress', 'Person Dress', 'an optional tech label', 'an optional description')
@enduml
```

