# PersonDressBurst


```text
fontawesome/Solid/PersonDressBurst
```

```text
include('fontawesome/Solid/PersonDressBurst')
```



| Illustration | PersonDressBurst |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonDressBurst.png) | ![illustration for PersonDressBurst](../../fontawesome/Solid/PersonDressBurst.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonDressBurstXs>`
- `<$PersonDressBurstSm>`
- `<$PersonDressBurstMd>`
- `<$PersonDressBurstLg>`





## PersonDressBurst

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonDressBurst
include('fontawesome/Solid/PersonDressBurst')

' renders the element
PersonDressBurst('PersonDressBurst', 'Person Dress Burst', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonDressBurst
include('fontawesome/Solid/PersonDressBurst')

' renders the element
PersonDressBurst('PersonDressBurst', 'Person Dress Burst', 'an optional tech label', 'an optional description')
@enduml
```

