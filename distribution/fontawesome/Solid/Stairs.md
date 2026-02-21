# Stairs


```text
fontawesome/Solid/Stairs
```

```text
include('fontawesome/Solid/Stairs')
```



| Illustration | Stairs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Stairs.png) | ![illustration for Stairs](../../fontawesome/Solid/Stairs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StairsXs>`
- `<$StairsSm>`
- `<$StairsMd>`
- `<$StairsLg>`





## Stairs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stairs
include('fontawesome/Solid/Stairs')

' renders the element
Stairs('Stairs', 'Stairs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stairs
include('fontawesome/Solid/Stairs')

' renders the element
Stairs('Stairs', 'Stairs', 'an optional tech label', 'an optional description')
@enduml
```

