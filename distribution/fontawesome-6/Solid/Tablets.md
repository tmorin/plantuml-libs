# Tablets


```text
fontawesome-6/Solid/Tablets
```

```text
include('fontawesome-6/Solid/Tablets')
```



| Illustration | Tablets |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Tablets.png) | ![illustration for Tablets](../../fontawesome-6/Solid/Tablets.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tablets
include('fontawesome-6/Solid/Tablets')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tablets
include('fontawesome-6/Solid/Tablets')

' renders the element
Tablets('Tablets', 'Tablets', 'an optional tech label', 'an optional description')
@enduml
```

