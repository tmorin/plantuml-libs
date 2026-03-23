# Cny


```text
fontawesome/Solid/Cny
```

```text
include('fontawesome/Solid/Cny')
```



| Illustration | Cny |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cny.png) | ![illustration for Cny](../../fontawesome/Solid/Cny.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CnyXs>`
- `<$CnySm>`
- `<$CnyMd>`
- `<$CnyLg>`





## Cny

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cny
include('fontawesome/Solid/Cny')

' renders the element
Cny('Cny', 'Cny', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cny
include('fontawesome/Solid/Cny')

' renders the element
Cny('Cny', 'Cny', 'an optional tech label', 'an optional description')
@enduml
```

