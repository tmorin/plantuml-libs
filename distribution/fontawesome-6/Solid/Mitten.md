# Mitten


```text
fontawesome-6/Solid/Mitten
```

```text
include('fontawesome-6/Solid/Mitten')
```



| Illustration | Mitten |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Mitten.png) | ![illustration for Mitten](../../fontawesome-6/Solid/Mitten.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mitten
include('fontawesome-6/Solid/Mitten')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mitten
include('fontawesome-6/Solid/Mitten')

' renders the element
Mitten('Mitten', 'Mitten', 'an optional tech label', 'an optional description')
@enduml
```

