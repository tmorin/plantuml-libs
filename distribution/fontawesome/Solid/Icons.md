# Icons


```text
fontawesome/Solid/Icons
```

```text
include('fontawesome/Solid/Icons')
```



| Illustration | Icons |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Icons.png) | ![illustration for Icons](../../fontawesome/Solid/Icons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IconsXs>`
- `<$IconsSm>`
- `<$IconsMd>`
- `<$IconsLg>`





## Icons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Icons
include('fontawesome/Solid/Icons')

' renders the element
Icons('Icons', 'Icons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Icons
include('fontawesome/Solid/Icons')

' renders the element
Icons('Icons', 'Icons', 'an optional tech label', 'an optional description')
@enduml
```

