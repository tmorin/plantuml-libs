# Meh


```text
fontawesome/Solid/Meh
```

```text
include('fontawesome/Solid/Meh')
```



| Illustration | Meh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Meh.png) | ![illustration for Meh](../../fontawesome/Solid/Meh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MehXs>`
- `<$MehSm>`
- `<$MehMd>`
- `<$MehLg>`





## Meh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Meh
include('fontawesome/Solid/Meh')

' renders the element
Meh('Meh', 'Meh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Meh
include('fontawesome/Solid/Meh')

' renders the element
Meh('Meh', 'Meh', 'an optional tech label', 'an optional description')
@enduml
```

