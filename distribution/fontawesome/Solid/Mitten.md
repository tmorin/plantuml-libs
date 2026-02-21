# Mitten


```text
fontawesome/Solid/Mitten
```

```text
include('fontawesome/Solid/Mitten')
```



| Illustration | Mitten |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Mitten.png) | ![illustration for Mitten](../../fontawesome/Solid/Mitten.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MittenXs>`
- `<$MittenSm>`
- `<$MittenMd>`
- `<$MittenLg>`





## Mitten

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mitten
include('fontawesome/Solid/Mitten')

' renders the element
Mitten('Mitten', 'Mitten', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mitten
include('fontawesome/Solid/Mitten')

' renders the element
Mitten('Mitten', 'Mitten', 'an optional tech label', 'an optional description')
@enduml
```

