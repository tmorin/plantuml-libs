# Tablets


```text
fontawesome/Solid/Tablets
```

```text
include('fontawesome/Solid/Tablets')
```



| Illustration | Tablets |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tablets.png) | ![illustration for Tablets](../../fontawesome/Solid/Tablets.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TabletsXs>`
- `<$TabletsSm>`
- `<$TabletsMd>`
- `<$TabletsLg>`





## Tablets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tablets
include('fontawesome/Solid/Tablets')

' renders the element
Tablets('Tablets', 'Tablets', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tablets
include('fontawesome/Solid/Tablets')

' renders the element
Tablets('Tablets', 'Tablets', 'an optional tech label', 'an optional description')
@enduml
```

