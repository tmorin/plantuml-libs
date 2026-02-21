# Carrot


```text
fontawesome/Solid/Carrot
```

```text
include('fontawesome/Solid/Carrot')
```



| Illustration | Carrot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Carrot.png) | ![illustration for Carrot](../../fontawesome/Solid/Carrot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarrotXs>`
- `<$CarrotSm>`
- `<$CarrotMd>`
- `<$CarrotLg>`





## Carrot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Carrot
include('fontawesome/Solid/Carrot')

' renders the element
Carrot('Carrot', 'Carrot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Carrot
include('fontawesome/Solid/Carrot')

' renders the element
Carrot('Carrot', 'Carrot', 'an optional tech label', 'an optional description')
@enduml
```

