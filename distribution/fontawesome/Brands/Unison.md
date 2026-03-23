# Unison


```text
fontawesome/Brands/Unison
```

```text
include('fontawesome/Brands/Unison')
```



| Illustration | Unison |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Unison.png) | ![illustration for Unison](../../fontawesome/Brands/Unison.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnisonXs>`
- `<$UnisonSm>`
- `<$UnisonMd>`
- `<$UnisonLg>`





## Unison

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Unison
include('fontawesome/Brands/Unison')

' renders the element
Unison('Unison', 'Unison', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unison
include('fontawesome/Brands/Unison')

' renders the element
Unison('Unison', 'Unison', 'an optional tech label', 'an optional description')
@enduml
```

