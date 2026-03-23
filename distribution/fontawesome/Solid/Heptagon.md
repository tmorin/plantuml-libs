# Heptagon


```text
fontawesome/Solid/Heptagon
```

```text
include('fontawesome/Solid/Heptagon')
```



| Illustration | Heptagon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Heptagon.png) | ![illustration for Heptagon](../../fontawesome/Solid/Heptagon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeptagonXs>`
- `<$HeptagonSm>`
- `<$HeptagonMd>`
- `<$HeptagonLg>`





## Heptagon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Heptagon
include('fontawesome/Solid/Heptagon')

' renders the element
Heptagon('Heptagon', 'Heptagon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Heptagon
include('fontawesome/Solid/Heptagon')

' renders the element
Heptagon('Heptagon', 'Heptagon', 'an optional tech label', 'an optional description')
@enduml
```

